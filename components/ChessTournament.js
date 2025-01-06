'use client';
import React, { useState, useEffect } from 'react';
import { Sword, ChevronDown, Trophy, Calendar, Shield, Users, BookOpen, Star } from 'lucide-react';

const AccordionSection = ({ title, children, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 rounded-lg transition-colors duration-200 ${isOpen ? 'rounded-b-none' : ''}`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-slate-800">{title}</span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-slate-100 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const ChessTournament = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight">
            CB Newton Cup
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your Epic Chess Adventure Awaits!
          </p>
        </div>

        {/* Main Content */}
        <div className="rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm p-6 shadow-lg">
          <AccordionSection title="Tournament Structure: Your Quest for Glory" icon={Trophy}>
            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-blue-500">
                <h4 className="font-semibold text-blue-900">Seeding Tournament (Week 1)</h4>
                <p className="text-slate-600 mt-2">Sharpen your swords (or rather, your chess pieces) in 5-minute matches to claim your spot on the ladder.</p>
              </div>
              <div className="pl-4 border-l-2 border-green-500">
                <h4 className="font-semibold text-green-900">Ladder Competition</h4>
                <p className="text-slate-600 mt-2">Challenge opponents ranked up to five positions above you to climb the ranks and prove your worth.</p>
              </div>
              <div className="pl-4 border-l-2 border-purple-500">
                <h4 className="font-semibold text-purple-900">Playoffs</h4>
                <p className="text-slate-600 mt-2">The top eight heroes will face off in a single-elimination showdown.</p>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection title="Match Rules: The Chess Battlefield" icon={Sword}>
            <ul className="space-y-4 list-none">
              {["All matches follow standard chess rules (FIDE), with each player wielding a mighty 10-minute clock.",
                "Report your victories (or defeats) within 24 hours.",
                "If a match ends in a stalemate, the higher-ranked player retains their position."].map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-slate-600">{rule}</p>
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Ladder Competition Guidelines" icon={Calendar}>
            <ul className="space-y-4 list-none">
              {["Challenge opponents ranked up to five positions above you each week.",
                "Issue your challenges directly, suggesting at least two proposed times.",
                "Respond to challenges within 48 hours.",
                "Complete matches within seven days of issuing a challenge."].map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-slate-600">{guideline}</p>
                </li>
              ))}
            </ul>
          </AccordionSection>

          <AccordionSection title="Honor Code and Sportsmanship" icon={Shield}>
            <div className="space-y-4">
              <p className="text-slate-600">The CB Newton Cup is more than just a competition; it's a celebration of values.</p>
              <ul className="space-y-4 list-none">
                {["Play with integrity and report results truthfully.",
                  "Treat opponents with respect and courtesy.",
                  "Foster a positive and supportive atmosphere."].map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <p className="text-slate-600">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionSection>

          <AccordionSection title="Late Registration" icon={Users}>
            <div className="space-y-4">
              <p className="text-slate-600">If you're a latecomer to this epic adventure, fear not! You can still join during the first two weeks.</p>
              <ul className="space-y-4 list-none">
                {["Start at the bottom of the ladder and rise through determination.",
                  "Play at least two matches per week during your first two weeks."].map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-slate-600">{rule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionSection>

          <AccordionSection title="Tournament Finals" icon={Star}>
            <div className="space-y-4">
              <p className="text-slate-600">The top eight warriors will advance to the Playoffs with 15-minute clocks.</p>
              <p className="text-slate-600">The tournament concludes with a grand awards ceremony!</p>
            </div>
          </AccordionSection>

          <AccordionSection title="Resources and Equipment" icon={BookOpen}>
            <div className="space-y-4">
              <p className="text-slate-600">Chessboards and clocks await you in the library chess corner.</p>
              <p className="text-slate-600">Keep an eye on both digital and physical leaderboards.</p>
              <p className="text-slate-600">Prizes awarded for excellence in performance and sportsmanship!</p>
            </div>
          </AccordionSection>
        </div>

        {/* Footer */}
        <div className="text-center py-8 text-slate-600">
          <p>By participating in the CB Newton Cup, you're becoming part of a legendary adventure.</p>
          <p className="font-semibold mt-2 text-blue-600">Sharpen your skills and let the games begin!</p>
        </div>
      </div>
    </div>
  );
};

export default ChessTournament;