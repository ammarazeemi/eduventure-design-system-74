
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { subjects } from "@/data/educationalData";
import { ChevronLeft, BookOpen } from "lucide-react";

const ReadingLearning = () => {
  const { subject: subjectId, topic: topicId } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const subject = subjects.find(s => s.id === subjectId);
  const topic = subject?.topics.find(t => t.id === topicId);
  
  if (!subject || !topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Topic Not Found</h1>
          <Button onClick={() => navigate("/dashboard")}>Return to Dashboard</Button>
        </div>
      </div>
    );
  }

  const getContentForPage = (page: number) => {
    const contentMap: { [key: number]: { title: string; content: string } } = {
      1: {
        title: `Introduction to ${topic.name}`,
        content: `Welcome to your comprehensive learning journey about ${topic.name}! This guide will take you through all essential concepts step by step. ${topic.name} is a fundamental topic in ${subject.title} that forms the building blocks for understanding more advanced concepts. In this section, you'll discover the core principles and foundational knowledge that will prepare you for deeper exploration of this fascinating subject.`
      },
      2: {
        title: `Basic Concepts of ${topic.name}`,
        content: `Let's explore the fundamental concepts that define ${topic.name}. Understanding these basics is crucial for your learning journey in ${subject.title}. These concepts form the foundation upon which all other knowledge in this area is built. We'll start with simple definitions and gradually build up to more complex ideas.`
      },
      3: {
        title: `Key Terminology in ${topic.name}`,
        content: `Every field of study has its own vocabulary, and ${topic.name} in ${subject.title} is no exception. Learning these essential terms will help you understand more complex explanations and communicate effectively about this topic. These terms are specifically chosen to support your understanding of ${topic.name}.`
      },
      4: {
        title: `Historical Context of ${topic.name}`,
        content: `Understanding how ${topic.name} was discovered or developed gives us valuable insight into its importance in ${subject.title}. Many great scientists and thinkers have contributed to our understanding of this topic over the years, each building upon previous knowledge to create our current understanding.`
      },
      5: {
        title: `Real-World Applications of ${topic.name}`,
        content: `${topic.name} isn't just academic theory - it has numerous practical applications in the real world. From everyday life to cutting-edge technology in ${subject.title}, understanding this topic helps us make sense of the world around us and opens doors to exciting career opportunities.`
      },
      6: {
        title: `Common Examples of ${topic.name}`,
        content: `Let's examine specific examples of ${topic.name} that you might encounter in daily life or in further studies of ${subject.title}. These carefully selected examples will help you connect theoretical knowledge with practical understanding and see how this topic manifests in the real world.`
      },
      7: {
        title: `Advanced Concepts in ${topic.name}`,
        content: `Now that you understand the basics, let's explore more sophisticated aspects of ${topic.name}. These advanced concepts build upon your foundational knowledge and introduce new layers of complexity that are essential for mastering ${subject.title}.`
      },
      8: {
        title: `Problem Solving with ${topic.name}`,
        content: `Learning to solve problems related to ${topic.name} is an essential skill in ${subject.title}. We'll walk through common problem-solving strategies and approaches that you can apply when working with concepts related to this topic.`
      },
      9: {
        title: `Common Misconceptions about ${topic.name}`,
        content: `There are several common misconceptions about ${topic.name} that students often encounter in ${subject.title}. Understanding what these are and why they're incorrect will strengthen your overall understanding and help you avoid common pitfalls.`
      },
      10: {
        title: `${topic.name} and Related Topics`,
        content: `${topic.name} doesn't exist in isolation within ${subject.title} - it connects to many other areas of study. Understanding these connections will help you see the bigger picture and appreciate how different concepts in ${subject.title} work together.`
      },
      11: {
        title: `Practice and Application of ${topic.name}`,
        content: `The best way to master ${topic.name} is through practice and application. Here are specific exercises and ways you can apply what you've learned about this topic to reinforce your understanding of ${subject.title} concepts.`
      },
      12: {
        title: `Summary and Next Steps for ${topic.name}`,
        content: `Congratulations! You've completed your reading journey on ${topic.name} in ${subject.title}. Let's review the key points and discuss what you can explore next to continue your learning journey in this fascinating field of study.`
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
      navigate(`/topic/${subject.id}/${topic.id}`);
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
            onClick={() => navigate(`/topic/${subject.id}/${topic.id}`)}
            className="text-white hover:bg-purple-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-purple-700"
            onClick={() => navigate(`/learn/${subject.id}`)}
          >
            <BookOpen className="h-5 w-5" />
          </Button>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">{topic.name}</h1>
        <p className="text-purple-200 text-sm mb-2">Reading Material for {subject.title}</p>
        
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
            
            {/* Topic-specific content sections */}
            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h4 className="font-semibold text-blue-800">Key Point about {topic.name}</h4>
                <p className="text-blue-700">This content is specifically curated for {topic.name} in {subject.title}. Take your time to absorb this targeted information.</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <h4 className="font-semibold text-green-800">Did You Know?</h4>
                <p className="text-green-700">Understanding {topic.name} opens up many opportunities for further exploration in {subject.title} and related fields.</p>
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
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
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
              <span>{currentPage === totalPages ? 'Complete' : 'Next'}</span>
              {currentPage !== totalPages && <span>→</span>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingLearning;
