
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ReadingLearning = () => {
  const { subject, topic } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();
  const decodedTopic = decodeURIComponent(topic || "");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const getContentForPage = (page: number) => {
    const contentMap: { [key: number]: { title: string; content: string } } = {
      1: {
        title: `Introduction to ${decodedTopic}`,
        content: `Welcome to your journey learning about ${decodedTopic}! This comprehensive guide will take you through all the essential concepts step by step. ${decodedTopic} is a fundamental topic that forms the building blocks for understanding more advanced concepts in ${subject}.`
      },
      2: {
        title: "Basic Concepts",
        content: `Let's start with the basic concepts of ${decodedTopic}. Understanding these fundamentals is crucial for your learning journey. These concepts form the foundation upon which all other knowledge in this area is built.`
      },
      3: {
        title: "Key Terminology",
        content: `Every subject has its own vocabulary. In ${decodedTopic}, there are several important terms you need to know. Learning these terms will help you understand more complex explanations and communicate effectively about this topic.`
      },
      4: {
        title: "Historical Context",
        content: `Understanding how ${decodedTopic} was discovered or developed gives us insight into its importance. Many great scientists and thinkers have contributed to our understanding of this topic over the years.`
      },
      5: {
        title: "Real-World Applications",
        content: `${decodedTopic} isn't just academic - it has many practical applications in the real world. From everyday life to cutting-edge technology, understanding this topic helps us make sense of the world around us.`
      },
      6: {
        title: "Common Examples",
        content: `Let's look at some common examples of ${decodedTopic} that you might encounter in daily life. These examples will help you connect theoretical knowledge with practical understanding.`
      },
      7: {
        title: "Advanced Concepts",
        content: `Now that you understand the basics, let's explore some more advanced aspects of ${decodedTopic}. These concepts build upon what you've already learned and introduce new layers of complexity.`
      },
      8: {
        title: "Problem Solving",
        content: `Learning to solve problems related to ${decodedTopic} is an essential skill. We'll walk through some common problem-solving strategies and approaches that you can apply.`
      },
      9: {
        title: "Common Misconceptions",
        content: `There are several common misconceptions about ${decodedTopic} that we should address. Understanding what these are and why they're incorrect will strengthen your overall understanding.`
      },
      10: {
        title: "Related Topics",
        content: `${decodedTopic} doesn't exist in isolation - it connects to many other areas of ${subject}. Understanding these connections will help you see the bigger picture.`
      },
      11: {
        title: "Practice and Application",
        content: `The best way to master ${decodedTopic} is through practice. Here are some exercises and ways you can apply what you've learned to reinforce your understanding.`
      },
      12: {
        title: "Summary and Next Steps",
        content: `Congratulations! You've completed your reading journey on ${decodedTopic}. Let's review the key points and discuss what you can explore next to continue your learning.`
      }
    };

    return contentMap[page] || contentMap[1];
  };

  const currentContent = getContentForPage(currentPage);
  const progressPercentage = (currentPage / totalPages) * 100;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate(`/topic/${subject}/${encodeURIComponent(decodedTopic)}`);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/topic/${subject}/${encodeURIComponent(decodedTopic)}`)}
            className="text-white hover:bg-purple-700"
          >
            ← Back
          </Button>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">{decodedTopic}</h1>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Reading Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-purple-300" />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentContent.title}
          </h2>
          
          <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
            <p className="text-lg">{currentContent.content}</p>
            
            {/* Additional content sections */}
            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h4 className="font-semibold text-blue-800">Key Point</h4>
                <p className="text-blue-700">Remember that {decodedTopic} is essential for understanding {subject}. Take your time to absorb this information.</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <h4 className="font-semibold text-green-800">Did You Know?</h4>
                <p className="text-green-700">Many real-world applications of {decodedTopic} can be found in everyday life, making this knowledge practically valuable.</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <span>← Previous</span>
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-3 h-3 rounded-full ${
                    currentPage === i + 1 ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700 flex items-center space-x-2"
            >
              <span>{currentPage === totalPages ? 'Complete' : 'Next →'}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingLearning;
