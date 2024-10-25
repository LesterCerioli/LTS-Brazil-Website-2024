'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router'; 
import { Container, Body, FormGroup, Label, Input, TextArea, Button } from './styles';

export default function CreatePostComponent() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<string>(''); 
  const [categories, setCategories] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories'); 
        if (response.ok) {
          const data = await response.json();
          setCategories(data); 
        } else {
          console.error('Erro ao carregar categorias');
        }
      } catch (error) {
        console.error('Erro de conexão:', error);
      }
    };

    fetchCategories(); 
  }, []); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!image || validateImage(image)) {
      const postData = {
        title: sanitizeInput(title),
        content: sanitizeInput(content),
        image: image ? await convertImageToBase64(image) : null,
        category, 
      };


        try {
            const res = await fetch('/api/posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`, 
              },
              body: JSON.stringify(postData), 
            });

        if (res.ok) {
            alert('Postagem criada com sucesso!');
            setTitle('');
            setContent('');
            setImage(null);
            setErrorMessage(null);
            router.push(`/blog/posts/${category}`);
          } else {
            const errorResponse = await res.json();
            alert(`Erro: ${errorResponse.message}`);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        alert('Por favor, carregue um arquivo de imagem válido.');
      }
    };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = e.target.files[0];
      if (validateImage(selectedImage)) {
        setImage(selectedImage);
        setErrorMessage(null); 
      } else {
        setImage(null);
        setErrorMessage('Formato de imagem inválido. Somente arquivos jpeg, jpg, png são permitidos.');
      }
    }
  };

  
  const validateImage = (file: File): boolean => {
    const allowedExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
    return allowedExtensions.includes(file.type);
  };

  const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>]/g, ""); 
  };

  const getToken = (): string => {
    return 'your-secure-token';
  };

  return (
    <Container>
      <h1>Criar uma nova postagem</h1>
      <Body>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Título</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="category">Selecionar Categoria</Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
             <option value="">Selecione uma categoria</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="content">Texto do Post</Label> 
            <TextArea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Carregar imagem</Label>
            <Input type="file" id="image" onChange={handleImageChange} />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </FormGroup>


          <Button type="submit">Criar postagem</Button>
        </form>
      </Body>
    </Container>
  );
}
