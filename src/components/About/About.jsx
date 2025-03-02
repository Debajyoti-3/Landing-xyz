import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/vector-1738325063779-aa6277a8b6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8MTU3fHx8ZW58MHx8fHx8"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Software Development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Software development isn’t just about writing code — it’s about crafting solutions with creativity and precision. Behind every innovative app and seamless system stand passionate developers, driven by curiosity and dedication.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Their commitment to continuous learning and problem-solving pushes the boundaries of what's possible. With every line of code, they shape the future, making technology more accessible and impactful.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}