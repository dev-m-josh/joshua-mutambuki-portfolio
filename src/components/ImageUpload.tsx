import React, { useRef, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
    currentImage?: string;
    onImageChange: (imageDataUrl: string | null) => void;
    className?: string;
    placeholder?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
    currentImage,
    onImageChange,
    className = "",
    placeholder = "Upload Image",
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);

    const handleFileSelect = (file: File) => {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                onImageChange(result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
    };

    const removeImage = () => {
        onImageChange(null);
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                }}
                accept="image/*"
                className="hidden"
            />

            {currentImage ? (
                <div className="relative group">
                    <img src={currentImage} alt="Uploaded" className="object-cover w-full h-full rounded-lg" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
                        <button
                            onClick={removeImage}
                            className="p-2 text-white transition-colors duration-200 bg-red-500 rounded-full hover:bg-red-600"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
                        dragOver
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                >
                    <div className="flex flex-col items-center space-y-2">
                        <div className="p-3 bg-gray-100 rounded-full dark:bg-gray-800">
                            {dragOver ? (
                                <Upload className="w-8 h-8 text-blue-500" />
                            ) : (
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            )}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{placeholder}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Drag & drop or click to browse</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
