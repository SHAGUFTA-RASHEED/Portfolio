"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function ResumePage() {
  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button and download - only visible on screen */}
      <div className="print:hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </Link>
          
          
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto p-8 max-w-4xl">
        <div className="bg-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shagufta Rasheed</h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                shaguftarasheed21@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                9121551493
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Hyderabad,India
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/shagufta-rasheed/"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I  am a Software Engineer specializing in Angular, TypeScript, PostgreSQL and Golang building scalable front-end applications and 
              optimizing data pipelines. I thrive on solving real-world problems by streamlining ETL processes and enhancing data 
              accessibility for business intelligence 
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Frontend:</h3>
                <p className="text-gray-700 mb-4">
                  HTML, CSS, Angular
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Backend:</h3>
                <p className="text-gray-700 mb-4">Pyhton , Golang ,Java, PostgreSQL, MySQL </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tools & Others:</h3>
                <p className="text-gray-700 mb-4">Git, Github, Jenkins, Docker, Rafay ,VScode , Mesos , EchoAPI, Postman ,ThunderClient </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud:</h3>
                <p className="text-gray-700 mb-4">AWS ,GCP and Azure </p>
              </div>
              
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Professional Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">NinjaInfosys Pvt. Ltd.</h3>
                  <p className="text-lg text-purple-600 font-medium">Mobile App Developer</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Lalitpur, Nepal</p>
                  <p>September 2024 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  Developed and deployed a Progressive Web App (PWA) called Palika App for municipalities, optimized for
                  kiosk and Android TV using Expo.
                </li>
                <li>
                  Implemented state management using Zustand and handled API requests using Axios and TanStack Query.
                </li>
                <li>Followed Clean Architecture for maintainability and built responsive, mobile-first UIs.</li>
                <li>Published app on Google Play Store: Palika App</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">KTM Coders Pvt. Ltd.</h3>
                  <p className="text-lg text-purple-600 font-medium">Junior Software Engineer</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Hyderabad,India</p>
                  <p>May 2023 – August 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Created responsive web pages using HTML5, Tailwind CSS ensuring cross-browser compatibility.</li>
                <li>Developed mobile app for service ordering using React Native.</li>
                <li>Built and maintained reusable UI components to accelerate development.</li>
                <li>Improved SEO and performance by optimizing assets and structure.</li>
                <li>Collaborated with UI/UX designers for pixel-perfect implementation.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Advanced Computer Institute</h3>
                  <p className="text-lg text-purple-600 font-medium">Computer Instructor</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Belbari, Morang</p>
                  <p>February 2018 – October 2019</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Conducted training on Microsoft Office Suite and programming basics.</li>
                <li>Designed and developed websites using WordPress.</li>
                <li>Guided students on the future scope in software development.</li>
              </ul>
            </div>
          </section>

          {/* Projects & Achievements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
              Projects & Achievements
            </h2>
            <div className="text-gray-700">
              <p className="mb-2">
                <strong>Manpower Company Website:</strong> Developed using React, Tailwind, HTML, CSS & JavaScript.
              </p>
              <p className="text-blue-600">
                Live Link:{" "}
                <a href="https://alzahrahr.com.np" className="hover:underline">
                  alzahrahr.com.np
                </a>
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bachelor in Computer Application (BCA)</h3>
                    <p className="text-gray-600">Kantipur City College, Kathmandu</p>
                  </div>
                  <p className="text-gray-600">April 2021 – Present</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">+2 in Science</h3>
                    <p className="text-gray-600">Sukuna Higher Secondary School, Morang</p>
                  </div>
                  <p className="text-gray-600">Completed December 2020</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Soft Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Soft Skills</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Self-Motivated</li>
                <li>• Effective Communication</li>
                <li>• Time Management</li>
                <li>• Critical Thinking</li>
                <li>• Teamwork & Adaptability</li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Languages</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Nepali (Native)</li>
                <li>• English (Fluent)</li>
                <li>• Hindi (Fluent)</li>
              </ul>
            </section>
          </div>

          {/* References */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">References</h2>
            <p className="text-gray-700 italic">Available upon request</p>
          </section>
        </div>
      </div>
    </div>
  )
}
