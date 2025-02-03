import React, { useState } from 'react'
import { Upload, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ImageFileUploader = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        onImageChange(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    onImageChange(null)
  }

  return (
    <div className="border-2 border-dashed rounded-lg p-8 text-center">
      {selectedImage ? (
        <div className="relative">
          <img src={selectedImage} alt="Selected cover" className="max-w-full h-auto rounded-lg" />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemoveImage}
            aria-label="Remove image"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <Upload className="h-5 w-5 text-gray-600" />
          </div>
          <p className="mt-4 mb-2 text-gray-900">Drag or upload a photo here</p>
          <p className="mb-4 text-sm text-gray-500">File should be in (.png or Jpeg) format</p>
          <Input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="hidden"
            id="coverImage"
          />
          <Button variant="outline" onClick={() => document.getElementById('coverImage').click()}>
            Browse file
          </Button>
        </div>
      )}
    </div>
  )
}

export default ImageFileUploader