"use client";

import { Button, Card, CardContent } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { Send, Mic, Sparkles, Circle as HelpCircle } from "lucide-react";
import { useState } from "react";

const suggestedQuestions = [
  "What is the best time to plant wheat in my region?",
  "How do I identify leaf blight disease?",
  "What fertilizers should I use for rice?",
  "How much water does cotton need?",
];

export default function AskAIPage() {
  const [input, setInput] = useState("");
  const [messages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [isRecording] = useState(false);

  return (
    <MainLayout title="Ask AI" showSearch={false}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Ask KrishiMitra AI</h2>
          <p className="text-foreground-muted mt-1">
            Get instant answers to your farming questions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Ask Anything About Farming
                      </h3>
                      <p className="text-foreground-muted max-w-md mx-auto">
                        Get AI-powered answers about crops, diseases, weather, and
                        agricultural best practices.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            message.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.role === "user"
                                ? "bg-accent text-background"
                                : "bg-background-elevated text-foreground"
                            }`}
                          >
                            {message.content}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-border pt-4">
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask about crops, diseases, weather..."
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background-elevated text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-background text-foreground-muted hover:text-foreground">
                          <Mic className="w-5 h-5" />
                        </button>
                      </div>
                      <Button leftIcon={<Send className="w-4 h-4" />}>
                        Send
                      </Button>
                    </div>
                    {isRecording && (
                      <p className="text-sm text-accent mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Recording...
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  Suggested Questions
                </h3>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question)}
                      className="w-full text-left p-3 rounded-lg bg-background-elevated hover:bg-border text-sm text-foreground-muted hover:text-foreground transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-3">Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground-muted">
                      AI-powered answers
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mic className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground-muted">
                      Voice recording
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground-muted">
                      In Hindi & English
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
