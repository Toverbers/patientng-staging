import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The rise of remote work has been nothing short of transformative, with technology advancements and changing workplace dynamics enabling individuals to",
      author: "Charlie Avila",
      designation: "Designation"
    },
    {
      id: 2,
      quote: "The rise of remote work has been nothing short of transformative, with technology advancements and changing workplace dynamics enabling individuals to",
      author: "Charlie Avila",
      designation: "Designation"
    },
    {
      id: 3,
      quote: "The rise of remote work has been nothing short of transformative, with technology advancements and changing workplace dynamics enabling individuals to",
      author: "Charlie Avila",
      designation: "Designation"
    },
    {
      id: 4,
      quote: "The rise of remote work has been nothing short of transformative, with technology advancements and changing workplace dynamics enabling individuals to",
      author: "Charlie Avila",
      designation: "Designation"
    }
  ];

  return (
    <section className="py-24">
      <div className="px-4">
        <div className="mb-12 flex items-center md:items-end gap-2 flex-col md:flex-row justify-between">
          <div>
            <span className="text-sm font-medium text-emerald-500">
              Patient stories
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Inspiring patient stories from our community.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Read inspiring stories from fellow patients or share your own to inspire others
            </p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Share your story
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 bg-[#FAFBFC] shadow-sm">
              <CardContent className="p-6">
                <blockquote className="space-y-6">
                  <p className="text-gray-600">
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <div className="flex flex-col md:flex-row items-center gap-1">
                      <cite className="font-medium not-italic">
                        -{testimonial.author}
                      </cite>
                      <span className="text-sm text-gray-500">
                        {testimonial.designation}
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="mt-4 h-auto p-0 text-emerald-500 hover:text-emerald-600"
                    >
                      Read full story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;