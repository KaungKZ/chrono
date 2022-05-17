import React from "react";

export default function designsystem() {
  return (
    <>
      <main>
        <div>
          <h1 className="text-xs">Welcome to chrono (10px)</h1>
          <h1 className="text-sm">Welcome to chrono (12px)</h1>
          <h1 className="text-base">Welcome to chrono (16px)</h1>
          <h1 className="text-md">Welcome to chrono (20px)</h1>
          <h1 className="text-lg">Welcome to chrono (24px)</h1>
          <h1 className="text-xl">Welcome to chrono (30px)</h1>
          <h1 className="text-2xl">Welcome to chrono (36px)</h1>
          <h1 className="text-3xl">Welcome to chrono (48px)</h1>
          <h1 className="text-4xl">Welcome to chrono (60px)</h1>
          <h1 className="text-5xl">Welcome to chrono (72px)</h1>
          <h1 className="text-6xl">Welcome to chrono (96px)</h1>
        </div>

        <div className="mt-8">
          <p className="gradient-text text-lg font-bold">
            This is primary font (DM Sans)
          </p>
          <p className="gradient-text text-lg font-secondary font-bold">
            This is secondary font (Manrope)
          </p>
        </div>

        <div className="mt-8">
          <h1 className="text-lg">Gradients</h1>
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-gradient-right-bottom"></div>
            <div className="w-12 h-12 bg-gradient-right-top"></div>
            <div className="w-12 h-12 bg-gradient-left-bottom"></div>
            <div className="w-12 h-12 bg-gradient-left-top"></div>
            <div className="w-12 h-12 bg-gradient-right"></div>
            <div className="w-12 h-12 bg-gradient-left"></div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg">Plain</h1>
          <div className="flex space-x-4">
            <div className="w-12 h-12 bg-indigo"></div>
            <div className="w-12 h-12 bg-purple"></div>
            <div className="w-12 h-12 bg-blue"></div>

            <div className="w-12 h-12 bg-gray-400"></div>
            <div className="w-12 h-12 bg-gray-500"></div>
            <div className="w-12 h-12 bg-gray-600"></div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-lg">Spacing</h1>
          <div className="flex space-x-6">
            <div>
              <div className="w-1.5 h-1.5 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">6px</div>
            </div>
            <div>
              <div className="w-2 h-2 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">8px</div>
            </div>
            <div>
              <div className="w-2.5 h-2.5 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">10px</div>
            </div>
            <div>
              <div className="w-4 h-4 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">16px</div>
            </div>
            <div>
              <div className="w-8 h-8 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">32px</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">64px</div>
            </div>
            <div>
              <div className="w-24 h-24 bg-gray-600 text-gray-600"></div>
              <div className="text-gray-600">128px</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
