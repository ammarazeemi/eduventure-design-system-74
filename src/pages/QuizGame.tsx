
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const QuizGame = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const quizData: { [key: string]: any } = {
    "cell-biology": {
      title: "Cell Biology Quiz",
      questions: [
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          correct: 1
        },
        {
          question: "Which organelle is responsible for protein synthesis?",
          options: ["Golgi apparatus", "Endoplasmic reticulum", "Ribosome", "Lysosome"],
          correct: 2
        },
        {
          question: "What controls what enters and exits the cell?",
          options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
          correct: 1
        },
        {
          question: "Where is DNA found in eukaryotic cells?",
          options: ["Cytoplasm", "Ribosome", "Nucleus", "Mitochondria"],
          correct: 2
        },
        {
          question: "What process do plants use to make their own food?",
          options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
          correct: 1
        }
      ]
    },
    "algebra": {
      title: "Algebra Quiz",
      questions: [
        {
          question: "What is the value of x in the equation 2x + 5 = 15?",
          options: ["5", "10", "7.5", "3"],
          correct: 0
        },
        {
          question: "Simplify: 3x + 2x",
          options: ["5x", "6x", "5x²", "6x²"],
          correct: 0
        },
        {
          question: "What is the slope of the line y = 3x + 2?",
          options: ["2", "3", "3x", "5"],
          correct: 1
        },
        {
          question: "Solve for y: 2y - 8 = 10",
          options: ["9", "6", "4", "1"],
          correct: 0
        },
        {
          question: "What is (x + 3)(x - 3)?",
          options: ["x² - 9", "x² + 9", "x² - 6x - 9", "x² + 6x + 9"],
          correct: 0
        }
      ]
    }
  };

  const currentQuiz = quizData[subject || "cell-biology"] || quizData["cell-biology"];
  const questions = currentQuiz.questions;
  const totalQuestions = questions.length;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  if (showResult) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 text-center">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🎉" : "📚"}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
          <div className="text-6xl font-bold text-purple-600 mb-2">{percentage}%</div>
          <p className="text-lg text-gray-600 mb-6">
            You scored {score} out of {totalQuestions} questions correctly!
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={handleRetry}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Try Again
            </Button>
            <Button 
              onClick={() => navigate('/quiz')}
              variant="outline"
              className="w-full"
            >
              Back to Quizzes
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/quiz')}
            className="text-white hover:bg-purple-700"
          >
            ← Back
          </Button>
          <div className="text-sm">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">{currentQuiz.title}</h1>
        
        {/* Progress Bar */}
        <Progress value={progressPercentage} className="h-2 bg-purple-300" />
      </div>

      {/* Question */}
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option: string, index: number) => {
                let buttonClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ";
                
                if (isAnswered) {
                  if (index === questions[currentQuestion].correct) {
                    buttonClass += "border-green-500 bg-green-50 text-green-700";
                  } else if (index === selectedAnswer) {
                    buttonClass += "border-red-500 bg-red-50 text-red-700";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                  }
                } else {
                  buttonClass += selectedAnswer === index 
                    ? "border-purple-500 bg-purple-50 text-purple-700" 
                    : "border-gray-200 hover:border-purple-300 hover:bg-purple-50";
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback and Next Button */}
          {isAnswered && (
            <div className="mt-6">
              <div className={`p-4 rounded-lg mb-4 ${
                selectedAnswer === questions[currentQuestion].correct 
                  ? "bg-green-100 border border-green-300" 
                  : "bg-red-100 border border-red-300"
              }`}>
                <p className={`font-medium ${
                  selectedAnswer === questions[currentQuestion].correct 
                    ? "text-green-800" 
                    : "text-red-800"
                }`}>
                  {selectedAnswer === questions[currentQuestion].correct 
                    ? "Correct! Well done!" 
                    : "Incorrect. The correct answer is " + String.fromCharCode(65 + questions[currentQuestion].correct) + "."}
                </p>
              </div>
              
              <Button 
                onClick={handleNext}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {currentQuestion === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
