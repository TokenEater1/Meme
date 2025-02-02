import React from 'react';
import { Beer, Coins, Users, Trophy, GlassWater } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-amber-900 text-amber-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center" 
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center mb-6">
            <Beer className="w-16 h-16 text-amber-400" />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-amber-400">PISSWASSER</h1>
          <p className="text-2xl mb-8">"The Worst Beer That Made The Best Token"</p>
          <p className="text-amber-400 text-xl font-bold">
            Buy $PISS Now
          </p>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Pisswasser?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-950/50 p-8 rounded-lg text-center">
              <Coins className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-4">Tokenomics That'll Make You Dizzy</h3>
              <p>1 Billion $PISS supply. No hangover taxes, just pure liquid goodness.</p>
            </div>
            <div className="bg-amber-950/50 p-8 rounded-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-4">Community of Beer Lovers</h3>
              <p>Join thousands of holders who know the difference between good and "good enough".</p>
            </div>
            <div className="bg-amber-950/50 p-8 rounded-lg text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-4">Certified Gold... ish</h3>
              <p>Winner of absolutely no awards, but who's counting when you're having fun?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What Our "Customers" Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-900/50 p-8 rounded-lg">
              <p className="italic mb-4">"I bought $PISS at the top and now I can't afford real beer. Still better than drinking actual Pisswasser!"</p>
              <p className="font-bold">- Chad McHolder</p>
            </div>
            <div className="bg-amber-900/50 p-8 rounded-lg">
              <p className="italic mb-4">"My wife left me because I wouldn't stop talking about $PISS tokenomics. Worth it!"</p>
              <p className="font-bold">- Diamond Dave</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-400 text-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join the Pisswasser Revolution?</h2>
          <p className="text-xl mb-8">Warning: May contain traces of humor and questionable financial decisions</p>
          <p className="text-amber-900 text-xl font-bold">
            Ape Into $PISS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Beer className="w-6 h-6 text-amber-400" />
            <GlassWater className="w-6 h-6 text-amber-400" />
          </div>
          <p className="text-amber-400/60">© 2024 Pisswasser. Drink responsibly, invest irresponsibly.</p>
          <p className="text-amber-400/60 text-sm mt-2">This is not financial advice. Please don't sue us.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;