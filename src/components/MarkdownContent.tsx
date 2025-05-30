
import React from 'react';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  // Simple markdown parser for basic formatting
  const formatMarkdown = (text: string) => {
    // Replace headers
    let formattedText = text.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold my-4">$1</h1>');
    formattedText = formattedText.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold my-3">$1</h2>');
    formattedText = formattedText.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold my-2">$1</h3>');
    
    // Replace lists
    formattedText = formattedText.replace(/^\- (.*$)/gm, '<li class="ml-5 list-disc">$1</li>');
    formattedText = formattedText.replace(/^\* (.*$)/gm, '<li class="ml-5 list-disc">$1</li>');
    formattedText = formattedText.replace(/^\+ (.*$)/gm, '<li class="ml-5 list-disc">$1</li>');
    
    // Replace numbered lists
    formattedText = formattedText.replace(/^\d+\. (.*$)/gm, '<li class="ml-5 list-decimal">$1</li>');
    
    // Replace bold
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\_\_(.*?)\_\_/gm, '<strong>$1</strong>');
    
    // Replace italic
    formattedText = formattedText.replace(/\*(.*?)\*/gm, '<em>$1</em>');
    formattedText = formattedText.replace(/\_(.*?)\_/gm, '<em>$1</em>');
    
    // Replace paragraphs
    formattedText = formattedText.replace(/^\s*$/gm, '</p><p class="my-2">');
    
    // Wrap in paragraph
    formattedText = '<p class="my-2">' + formattedText + '</p>';
    
    // Fix empty paragraphs
    formattedText = formattedText.replace(/<p class="my-2"><\/p>/g, '');
    
    return formattedText;
  };

  return (
    <div 
      className="prose max-w-none" 
      dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
    />
  );
};

export default MarkdownContent;
