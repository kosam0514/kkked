/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Evaluation } from './components/Evaluation';
import { Personnel } from './components/Personnel';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-blue-200">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Evaluation />
        <Personnel />
      </main>
      <Footer />
    </div>
  );
}
