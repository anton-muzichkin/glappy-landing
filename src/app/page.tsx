import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-6">
        <div className="text-2xl font-bold italic">Vavey</div>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#" className="text-sm opacity-80 hover:opacity-100">
            ABOUT US
          </Link>
          <Link href="#" className="text-sm opacity-80 hover:opacity-100">
            FAQ
          </Link>
          <Link href="#" className="text-sm opacity-80 hover:opacity-100">
            CONTACT US
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            MENTAL HEALTH APP TO REDUCE STRESS & ANXIETY
          </h1>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"></div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"></div>
          <Image
            src="/placeholder.svg?height=600&width=300"
            width={300}
            height={600}
            alt="Mental health app mockup"
            className="relative z-10"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto mt-24 text-center">
        <h2 className="text-xl">Cutting-edge features for advanced analytics</h2>

        {/* User Dashboard */}
        <div className="mt-20">
          <h3 className="mb-8 text-xl">User Dashboard</h3>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=250"
                width={250}
                height={500}
                alt="Dashboard mockup"
                className="relative z-10"
              />
            </div>
            <div className="max-w-sm text-left">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-green-400"></span>
                <h4 className="font-semibold">Progress Indicator</h4>
              </div>
              <p className="text-sm text-gray-400">
                Users can track progress through a visual sequence of information and metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Emotion Tracking */}
        <div className="mt-20 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="order-2 max-w-sm text-left md:order-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-cyan-400"></span>
              <h4 className="font-semibold">Emotion Tracking</h4>
            </div>
            <p className="text-sm text-gray-400">
              Users can identify emotions, understand their triggers, and develop strategies to manage them effectively.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=500&width=250"
              width={250}
              height={500}
              alt="Emotion tracking mockup"
              className="relative z-10"
            />
          </div>
        </div>

        {/* Statistics Screen */}
        <div className="mt-20">
          <h3 className="mb-8 text-xl">Statistics Screen</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-900/50 p-6">
              <div className="rounded-lg bg-blue-100 p-3">
                <Image src="/placeholder.svg?height=40&width=40" width={40} height={40} alt="Stats icon" />
              </div>
              <h4 className="font-semibold">Reward System</h4>
              <p className="text-xs text-gray-400">
                Motivates users to stay consistent with daily tracking & rewards for completing tasks.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-900/50 p-6">
              <div className="rounded-lg bg-gray-800 p-3">
                <Image src="/placeholder.svg?height=40&width=40" width={40} height={40} alt="Calendar icon" />
              </div>
              <h4 className="font-semibold">Progress Calendar</h4>
              <p className="text-xs text-gray-400">
                Users can gain insight into their habits by tracking over time, promoting their mental health.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=250"
                width={250}
                height={500}
                alt="Calendar mockup"
                className="relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Login Screens */}
        <div className="mt-20">
          <h3 className="mb-8 text-xl">Login Screens</h3>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=250"
                width={250}
                height={500}
                alt="Login mockup"
                className="relative z-10"
              />
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=250"
                width={250}
                height={500}
                alt="Stats mockup"
                className="relative z-10"
              />
            </div>
          </div>
          <div className="mt-8 max-w-md mx-auto text-left">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-purple-400"></span>
              <h4 className="font-semibold">Progress Indicator</h4>
            </div>
            <p className="text-sm text-gray-400">
              A colorful visual representation that guides users to the next section.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto mt-24 text-center">
        <h2 className="text-2xl font-semibold">Simple, transparent pricing</h2>
        <p className="mt-2 text-sm text-gray-400">No contracts. No surprise fees.</p>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-transparent bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 p-[1px]">
          <div className="rounded-xl bg-gray-900 p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Unlimited access to all features</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Access to all premium content</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Personal coach and support</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-t border-gray-700 pt-6 md:border-l md:border-t-0 md:pt-0 md:pl-6">
                <div className="text-3xl font-bold">$49</div>
                <div className="text-sm text-gray-400">ALL YOU NEED PLAN</div>
                <div className="mt-2 text-xs text-green-400">FREE 7-day trial</div>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Get Started Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto mt-24">
        <h2 className="mb-8 text-center text-2xl font-semibold">Frequently asked questions</h2>
        <p className="mb-12 text-center text-sm text-gray-400">Everything you need to know about the product</p>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-left">What is available in the product?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                Our mental health app provides tools for tracking emotions, monitoring progress, and developing healthy
                habits. It includes features like mood tracking, guided meditation, and personalized insights.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-left">Is my data secure and private?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                Yes, we take privacy seriously. All your data is encrypted and stored securely. We never share your
                personal information with third parties without your explicit consent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-left">How can I cancel my subscription with you?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                You can cancel your subscription anytime from your account settings. There are no cancellation fees, and
                you'll continue to have access until the end of your billing period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-left">Can I use the app offline?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                Yes, many features of our app work offline. You can track your mood, complete exercises, and access
                downloaded content without an internet connection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-800 rounded-lg px-6">
              <AccordionTrigger className="text-left">How many devices can I use?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-400">
                Your subscription allows you to use the app on up to 5 devices simultaneously, so you can access your
                mental health tools wherever you are.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto mt-24">
        <div className="mx-auto max-w-4xl rounded-xl bg-gray-900/80 p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Get your AI solution for your work or ask us a question</h2>
              <p className="mt-2 text-sm text-gray-400">Email us at: contact@vavey.com</p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="relative mt-24 overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          {/* Stars background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute h-2 w-2 rounded-full bg-white" style={{ top: "10%", left: "20%" }}></div>
            <div className="absolute h-1 w-1 rounded-full bg-white" style={{ top: "30%", left: "40%" }}></div>
            <div className="absolute h-2 w-2 rounded-full bg-white" style={{ top: "20%", left: "80%" }}></div>
            <div className="absolute h-1 w-1 rounded-full bg-white" style={{ top: "50%", left: "15%" }}></div>
            <div className="absolute h-1 w-1 rounded-full bg-white" style={{ top: "70%", left: "50%" }}></div>
            <div className="absolute h-2 w-2 rounded-full bg-white" style={{ top: "40%", left: "70%" }}></div>
            <div className="absolute h-1 w-1 rounded-full bg-white" style={{ top: "80%", left: "85%" }}></div>
          </div>

          {/* Landscape */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto flex justify-center">
              <div className="relative">
                <div className="absolute -top-16 h-32 w-32 rounded-full bg-yellow-200"></div>
                <div className="h-24 w-full bg-gradient-to-r from-purple-900 via-purple-700 to-pink-700"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Thank You!</h2>
        </div>
      </section>
    </div>
  )
}
