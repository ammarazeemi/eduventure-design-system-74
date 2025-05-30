
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const QuizGame = () => {
  const { subject, topic } = useParams<{ subject: string; topic?: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const quizData: { [key: string]: any } = {
    // Biology quizzes
    "biology-cells": {
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
    "biology-dna": {
      title: "DNA Quiz",
      questions: [
        {
          question: "What does DNA stand for?",
          options: ["Deoxyribonucleic Acid", "Deoxyribose Acid", "Dynamic Nuclear Acid", "Double Nuclear Acid"],
          correct: 0
        },
        {
          question: "DNA is made up of how many strands?",
          options: ["1", "2", "3", "4"],
          correct: 1
        },
        {
          question: "Which bases pair together in DNA?",
          options: ["A-T and G-C", "A-G and T-C", "A-C and T-G", "All pair equally"],
          correct: 0
        }
      ]
    },
    "biology-photosynthesis": {
      title: "Photosynthesis Quiz",
      questions: [
        {
          question: "Where does photosynthesis occur in plants?",
          options: ["Roots", "Stems", "Leaves", "Flowers"],
          correct: 2
        },
        {
          question: "What gas do plants release during photosynthesis?",
          options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
          correct: 2
        }
      ]
    },
    // Mathematics quizzes
    "mathematics-algebra": {
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
    },
    "mathematics-geometry": {
      title: "Geometry Quiz",
      questions: [
        {
          question: "What is the sum of angles in a triangle?",
          options: ["90°", "180°", "270°", "360°"],
          correct: 1
        },
        {
          question: "What is the area of a circle with radius 5?",
          options: ["25π", "10π", "5π", "15π"],
          correct: 0
        }
      ]
    },
    // Geography quizzes
    "geography-volcanoes": {
      title: "Volcanoes Quiz",
      questions: [
        {
          question: "What type of rock forms from cooled lava?",
          options: ["Sedimentary", "Metamorphic", "Igneous", "Limestone"],
          correct: 2
        },
        {
          question: "What is the ring of volcanoes around the Pacific Ocean called?",
          options: ["Ring of Fire", "Pacific Ring", "Volcano Belt", "Fire Circle"],
          correct: 0
        },
        {
          question: "What causes volcanic eruptions?",
          options: ["Tectonic plate movement", "Ocean currents", "Wind patterns", "Solar radiation"],
          correct: 0
        },
        {
          question: "Which gas is most commonly released during volcanic eruptions?",
          options: ["Oxygen", "Carbon dioxide", "Water vapor", "Nitrogen"],
          correct: 2
        }
      ]
    },
    "geography-climate": {
      title: "Climate Quiz",
      questions: [
        {
          question: "What is the main cause of seasons?",
          options: ["Distance from sun", "Earth's tilt", "Solar flares", "Moon phases"],
          correct: 1
        },
        {
          question: "Which climate zone is hottest?",
          options: ["Temperate", "Polar", "Tropical", "Desert"],
          correct: 2
        }
      ]
    },
    // Chemistry quizzes
    "chemistry-periodic-table": {
      title: "Periodic Table Quiz",
      questions: [
        {
          question: "What is the chemical symbol for Gold?",
          options: ["Go", "Gd", "Au", "Ag"],
          correct: 2
        },
        {
          question: "How many elements are in the first period?",
          options: ["2", "8", "18", "32"],
          correct: 0
        },
        {
          question: "Which element has the atomic number 1?",
          options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
          correct: 1
        },
        {
          question: "What group do the noble gases belong to?",
          options: ["Group 1", "Group 17", "Group 18", "Group 2"],
          correct: 2
        }
      ]
    },
    "chemistry-atoms": {
      title: "Atoms Quiz",
      questions: [
        {
          question: "What particles are found in the nucleus?",
          options: ["Protons and electrons", "Protons and neutrons", "Neutrons and electrons", "Only protons"],
          correct: 1
        },
        {
          question: "What charge do electrons have?",
          options: ["Positive", "Negative", "Neutral", "Variable"],
          correct: 1
        }
      ]
    },
    // Physics quizzes
    "physics-motion": {
      title: "Motion Quiz",
      questions: [
        {
          question: "What is velocity?",
          options: ["Speed only", "Displacement per unit time", "Distance per unit time", "Acceleration"],
          correct: 1
        },
        {
          question: "What is Newton's first law?",
          options: ["F=ma", "Objects at rest stay at rest", "Action-reaction", "Energy conservation"],
          correct: 1
        }
      ]
    },
    "physics-forces": {
      title: "Forces Quiz",
      questions: [
        {
          question: "What is the formula for force?",
          options: ["F = ma", "F = mv", "F = m/a", "F = a/m"],
          correct: 0
        },
        {
          question: "What force opposes motion?",
          options: ["Gravity", "Friction", "Normal force", "Applied force"],
          correct: 1
        }
      ]
    },
    // English quizzes
    "english-grammar": {
      title: "Grammar Quiz",
      questions: [
        {
          question: "What part of speech is the word 'quickly'?",
          options: ["Noun", "Verb", "Adjective", "Adverb"],
          correct: 3
        },
        {
          question: "Which is a proper noun?",
          options: ["dog", "city", "London", "happiness"],
          correct: 2
        }
      ]
    },
    "english-literature": {
      title: "Literature Quiz",
      questions: [
        {
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
          correct: 1
        }
      ]
    },
    // Computer Science quizzes
    "computer-science-programming": {
      title: "Programming Quiz",
      questions: [
        {
          question: "What is a variable?",
          options: ["A constant value", "Storage for data", "A function", "An algorithm"],
          correct: 1
        },
        {
          question: "Which language is known for web development?",
          options: ["Python", "JavaScript", "C++", "Java"],
          correct: 1
        }
      ]
    },
    "computer-science-algorithms": {
      title: "Algorithms Quiz",
      questions: [
        {
          question: "What is an algorithm?",
          options: ["A programming language", "Step-by-step procedure", "A computer", "A website"],
          correct: 1
        }
      ]
    }
  };

  // Create quiz key and find the correct quiz
  const quizKey = `${subject}-${topic}`;
  let currentQuiz = quizData[quizKey];
  
  // If specific quiz not found, try to find any quiz for this subject
  if (!currentQuiz && subject) {
    const subjectQuizzes = Object.keys(quizData).filter(key => key.startsWith(subject + '-'));
    if (subjectQuizzes.length > 0) {
      currentQuiz = quizData[subjectQuizzes[0]];
    }
  }
  
  // Final fallback to a default quiz if nothing found
  if (!currentQuiz) {
    currentQuiz = {
      title: "General Quiz",
      questions: [
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correct: 1
        }
      ]
    };
  }

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
          <h1 className="text-2xl font-bold text-purple-600 mb-8">Eduventure</h1>
          <div className="text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🎉" : "📚"}
          </div>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Quiz Results</h2>
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
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            ← Back
          </Button>
          <h1 className="text-xl font-bold text-center flex-1">{currentQuiz.title}</h1>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => {/* Show quiz hints */}}
          >
            ❓
          </Button>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-purple-300" />
        </div>
      </div>

      {/* Question */}
      <div className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
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
