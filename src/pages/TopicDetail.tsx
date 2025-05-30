
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { subjects } from "@/data/educationalData";
import { ChevronLeft } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";

const TopicDetail = () => {
  const { subject: subjectId, topic: topicId } = useParams<{ subject: string; topic: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("reading");
  
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

  return (
    <div className="min-h-screen bg-white pb-6">
      {/* Header */}
      <div className={`bg-gradient-to-r ${subject.color} p-6`}>
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/learn/${subject.id}`)}
            className="text-gray-800 hover:bg-white hover:bg-opacity-20"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
          <h1 className="text-xl font-bold text-gray-800">{topic.name}</h1>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>
        <div className="flex items-center justify-center">
          <span className="text-4xl">{topic.icon}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-4">
        <Tabs defaultValue="reading" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-6 w-full">
            <TabsTrigger value="reading" className="text-md font-medium">Learn by Reading</TabsTrigger>
            <TabsTrigger value="video" className="text-md font-medium">Learn with Video</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reading" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <MarkdownContent content={topic.readingContent} />
              
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => navigate(`/learn/reading/${subject.id}/${topic.id}`)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                >
                  Continue Reading
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  src={topic.videoUrl} 
                  title={`${topic.name} Video`}
                  className="w-full h-64 rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <h3 className="text-lg font-semibold mt-4">{topic.name} Video Lesson</h3>
              <p className="text-gray-600 mt-2">
                This video covers the key concepts of {topic.name.toLowerCase()}.
              </p>
              
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={() => navigate(`/learn/video/${subject.id}/${topic.id}`)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6"
                >
                  Full Video Lesson
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Topics */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold mb-4">Related Topics</h2>
        <div className="grid grid-cols-2 gap-3">
          {subject.topics
            .filter(t => t.id !== topic.id)
            .slice(0, 4)
            .map((relatedTopic, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => navigate(`/topic/${subject.id}/${relatedTopic.id}`)}
                className="text-left justify-start h-auto p-3 border-gray-200 hover:border-purple-300"
              >
                <div className="mr-2">{relatedTopic.icon}</div>
                <span className="truncate">{relatedTopic.name}</span>
              </Button>
            ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="px-4 py-6">
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate(`/learn/${subject.id}`)}
            className="border-gray-200 hover:border-purple-300"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            All Topics
          </Button>
          
          <Button 
            onClick={() => navigate(`/quiz/${subject.id}/${topic.id}`)}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Take a Quiz
            <span className="ml-2">🎲</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
