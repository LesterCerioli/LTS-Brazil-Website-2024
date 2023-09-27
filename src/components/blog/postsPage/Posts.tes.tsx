// Posts.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Posts from './Posts'

// Explicitly type the jest.mock call
// jest.mock(
//   'next/image',
//   () =>
//     ({ src, alt }: { src: string; alt: string }) =>
//       (<img src={src} alt={alt} />) as React.FC<{}>
// )

// Explicit type definition for shuffleArray
type ShuffleArray = <T>(array: T[]) => T[]

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
    // Mock the shuffleArray function with the explicit type
    jest
      .spyOn(global, 'shuffleArray' as keyof ShuffleArray)
      .mockReturnValue(mockedImages)

    render(<Posts />)

    // ... (rest of your test)
  })
})
