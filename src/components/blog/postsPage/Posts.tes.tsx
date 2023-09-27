// Posts.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Posts from './Posts'
import Image from 'next/image'

// // Explicitly type the jest.mock call
// jest.mock(
//   'next/image',
//   () =>
//     ({ src, alt }: { src: string; alt: string }) =>
//       (<Image src={src} alt={alt} />) as React.FC
// )

// Mocking the postCategoryImages array
jest.mock('@/components/blog/helper/postCategotyImages', () => ({
  postCategoryImages: [
    { image: 'mock-image-1.jpg', link: 'mock-link-1' },
    { image: 'mock-image-2.jpg', link: 'mock-link-2' },
    // Add more mock data as needed
  ],
}))

describe('Posts Component', () => {
  it('renders posts with shuffled images and links', () => {
    render(<Posts />)

    // Assert that the component renders
    const headerElement = screen.getByText(/Confira nossos posts/i)
    expect(headerElement).toBeInTheDocument()

    // Mocked data for postCategoryImages
    const mockedImages = [
      { image: 'mock-image-1.jpg', link: 'mock-link-1' },
      { image: 'mock-image-2.jpg', link: 'mock-link-2' },
    ]

    // Mock the shuffleArray function to return the mockedImages array
    jest.spyOn(global, 'shuffleArray').mockReturnValue(mockedImages)

    // Assert that the images are rendered with the correct alt text and links
    mockedImages.forEach((item, index) => {
      const imageElement = screen.getByAltText(`Image ${index}`)
      const linkElement = screen.getByRole('link', { name: `Image ${index}` })

      expect(imageElement).toHaveAttribute('src', item.image)
      expect(linkElement).toHaveAttribute('href', item.link)
    })
  })
})
