
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const GamePlay = () => {
  const { subject, gameName } = useParams<{ subject: string; gameName: string }>();
  const navigate = useNavigate();
  const decodedGameName = decodeURIComponent(gameName || "");
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  // Game questions organized by subject and game name
  const gameQuestions: { [key: string]: { [key: string]: any } } = {
    chemistry: {
      "Periodic Table Match": {
        questions: [
          {
            question: "Which element has the symbol 'H'?",
            options: ["Helium", "Hydrogen", "Hafnium", "Holmium"],
            correct: 1
          },
          {
            question: "What is the atomic number of Carbon?",
            options: ["6", "12", "14", "8"],
            correct: 0
          },
          {
            question: "Which element is known as 'Au'?",
            options: ["Silver", "Gold", "Aluminum", "Argon"],
            correct: 1
          },
          {
            question: "What is the chemical symbol for Sodium?",
            options: ["So", "Sd", "Na", "S"],
            correct: 2
          }
        ]
      },
      "Element Matching": {
        questions: [
          {
            question: "Which gas makes up most of Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
          },
          {
            question: "What is the most abundant element in the universe?",
            options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
            correct: 2
          }
        ]
      },
      "Reaction Timer": {
        questions: [
          {
            question: "What happens when you mix an acid and a base?",
            options: ["Explosion", "Neutralization", "Evaporation", "Freezing"],
            correct: 1
          },
          {
            question: "What type of reaction is photosynthesis?",
            options: ["Combustion", "Decomposition", "Synthesis", "Single replacement"],
            correct: 2
          }
        ]
      }
    },
    biology: {
      "Cell Parts Quiz": {
        questions: [
          {
            question: "What is the control center of the cell?",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
            correct: 1
          },
          {
            question: "Which organelle produces energy for the cell?",
            options: ["Nucleus", "Mitochondria", "Golgi apparatus", "Lysosome"],
            correct: 1
          },
          {
            question: "What controls what enters and exits the cell?",
            options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
            correct: 1
          }
        ]
      },
      "DNA Sequence": {
        questions: [
          {
            question: "What does DNA stand for?",
            options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Acid", "Double Nuclear Acid", "Deoxyribose Acid"],
            correct: 0
          },
          {
            question: "Which bases pair together in DNA?",
            options: ["A-T and G-C", "A-G and T-C", "A-C and T-G", "All pair equally"],
            correct: 0
          }
        ]
      }
    },
    geography: {
      "Volcano Memory Game": {
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
          }
        ]
      },
      "Map Explorer": {
        questions: [
          {
            question: "Which continent is the largest by area?",
            options: ["Africa", "Asia", "North America", "Europe"],
            correct: 1
          },
          {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
            correct: 1
          }
        ]
      },
      "Climate Challenge": {
        questions: [
          {
            question: "What causes the seasons?",
            options: ["Distance from sun", "Earth's tilt", "Solar flares", "Moon phases"],
            correct: 1
          },
          {
            question: "Which climate zone is the hottest?",
            options: ["Temperate", "Polar", "Tropical", "Desert"],
            correct: 2
          }
        ]
      }
    },
    mathematics: {
      "Math Puzzle Challenge": {
        questions: [
          {
            question: "What is 15% of 200?",
            options: ["30", "25", "35", "20"],
            correct: 0
          },
          {
            question: "If x + 5 = 12, what is x?",
            options: ["7", "6", "8", "5"],
            correct: 0
          },
          {
            question: "What is the area of a square with side 4?",
            options: ["16", "12", "8", "20"],
            correct: 0
          }
        ]
      },
      "Equation Solver": {
        questions: [
          {
            question: "Solve: 2x + 6 = 14",
            options: ["4", "3", "5", "2"],
            correct: 0
          },
          {
            question: "What is the value of π (pi) approximately?",
            options: ["3.14", "2.14", "4.14", "1.14"],
            correct: 0
          }
        ]
      }
    },
    physics: {
      "Force Calculator": {
        questions: [
          {
            question: "What is the formula for force?",
            options: ["F = ma", "F = mv", "F = m/a", "F = a/m"],
            correct: 0
          },
          {
            question: "What is the unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1
          }
        ]
      },
      "Motion Physics": {
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
      }
    },
    english: {
      "Grammar Catcher": {
        questions: [
          {
            question: "What part of speech is 'quickly'?",
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
      "Vocabulary Builder": {
        questions: [
          {
            question: "What does 'benevolent' mean?",
            options: ["Evil", "Kind", "Angry", "Sad"],
            correct: 1
          },
          {
            question: "What is a synonym for 'happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            correct: 1
          }
        ]
      }
    },
    "computer-science": {
      "Binary Converter": {
        questions: [
          {
            question: "What is 5 in binary?",
            options: ["101", "110", "111", "100"],
            correct: 0
          },
          {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
            correct: 0
          }
        ]
      },
      "Code Challenge": {
        questions: [
          {
            question: "What is a variable in programming?",
            options: ["A constant value", "Storage for data", "A function", "An algorithm"],
            correct: 1
          },
          {
            question: "Which language is primarily used for web development?",
            options: ["Python", "JavaScript", "C++", "Java"],
            correct: 1
          }
        ]
      }
    }
  };

  // Get the correct game data based on subject and game name
  let currentGame;
  if (subject && gameQuestions[subject] && gameQuestions[subject][decodedGameName]) {
    currentGame = gameQuestions[subject][decodedGameName];
  } else {
    // Fallback to a default game if not found
    currentGame = {
      questions: [
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correct: 1
        }
      ]
    };
  }

  const questions = currentGame.questions;
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
          <h1 className="text-3xl font-bold text-purple-600 mb-4">Game Complete!</h1>
          <div className="text-6xl font-bold text-purple-600 mb-2">{percentage}%</div>
          <p className="text-lg text-gray-600 mb-6">
            You scored {score} out of {totalQuestions} questions correctly!
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={handleRetry}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Play Again
            </Button>
            <Button 
              onClick={() => navigate('/games')}
              variant="outline"
              className="w-full"
            >
              Back to Games
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
            onClick={() => navigate('/games')}
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            ← Back
          </Button>
          <h1 className="text-xl font-bold text-center flex-1">{decodedGameName}</h1>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-purple-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => {/* Show game hints */}}
          >
            ❓
          </Button>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{currentQuestion + 1}/{totalQuestions}</span>
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
                {currentQuestion === totalQuestions - 1 ? "Finish Game" : "Next Question"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
