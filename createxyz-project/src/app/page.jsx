"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("introduction");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    question: "",
  });
  const [reactionData, setReactionData] = React.useState([
    { name: "Combustion", energy: -890, equation: "CH₄ + 2O₂ → CO₂ + 2H₂O" },
    {
      name: "Neutralization",
      energy: -57,
      equation: "HCl + NaOH → NaCl + H₂O",
    },
    { name: "Decomposition", energy: 180, equation: "2H₂O → 2H₂ + O₂" },
    { name: "Formation", energy: -285, equation: "H₂ + ½O₂ → H₂O" },
  ]);

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question submitted:", formData);
  };

  const updateReactionData = () => {
    setReactionData(
      reactionData.map((reaction) => ({
        ...reaction,
        energy: reaction.energy + (Math.random() - 0.5) * 100,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-center p-4 font-crimson-text">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl p-8 mb-8 border-t-8 border-[#4a90e2]">
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-[#2c3e50] text-center">
            Advanced Thermochemistry Guide
          </h1>
          <p className="text-xl text-[#34495e] text-center mt-2">
            Unlocking the Mysteries of Chemical Energy
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-[#ecf0f1] rounded-lg p-6 shadow-inner">
            <h2 className="text-3xl font-semibold text-[#2c3e50] mb-4">
              Key Concepts in Thermochemistry
            </h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                {["introduction", "enthalpy", "hess", "bond-energy"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`flex-1 py-2 px-4 rounded transition duration-300 ease-in-out ${
                        activeTab === tab
                          ? "bg-[#4a90e2] text-white"
                          : "bg-white text-[#2c3e50]"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                )}
              </div>
              <div className="mt-4 text-[#34495e] bg-white p-4 rounded-lg shadow-inner min-h-[200px]">
                {activeTab === "introduction" && (
                  <div>
                    <p>
                      Thermochemistry is the study of heat energy changes in
                      chemical reactions. It's crucial for understanding energy
                      flow in chemical processes and has applications in various
                      fields:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Fuel efficiency in combustion engines</li>
                      <li>Design of chemical reactors</li>
                      <li>Understanding biological processes</li>
                      <li>Development of energy storage systems</li>
                    </ul>
                    <img
                      src="/images/thermochemistry-overview.jpg"
                      alt="Overview of thermochemistry concepts"
                      className="mt-4 w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
                {activeTab === "enthalpy" && (
                  <div>
                    <p>
                      Enthalpy (H) is a measure of the total heat content of a
                      system. Its change (ΔH) indicates if a reaction is
                      endothermic or exothermic.
                    </p>
                    <p className="mt-2">Key points:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>ΔH {">"} 0: Endothermic reaction (absorbs heat)</li>
                      <li>ΔH {"<"} 0: Exothermic reaction (releases heat)</li>
                      <li>
                        Standard enthalpy of formation (ΔH°f): Enthalpy change
                        when 1 mole of a compound forms from its elements in
                        their standard states
                      </li>
                    </ul>
                    <img
                      src="/images/enthalpy-diagram.jpg"
                      alt="Enthalpy diagram showing endothermic and exothermic reactions"
                      className="mt-4 w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
                {activeTab === "hess" && (
                  <div>
                    <p>
                      Hess's Law states that the total enthalpy change in a
                      reaction is independent of the path taken. It allows us to
                      calculate enthalpy changes for complex reactions.
                    </p>
                    <p className="mt-2">Applications:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        Calculating enthalpies of reactions that are difficult
                        to measure directly
                      </li>
                      <li>
                        Breaking down complex reactions into simpler steps
                      </li>
                      <li>
                        Predicting the most energetically favorable reaction
                        pathway
                      </li>
                    </ul>
                    <img
                      src="/images/hess-law-illustration.jpg"
                      alt="Illustration of Hess's Law with reaction pathways"
                      className="mt-4 w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
                {activeTab === "bond-energy" && (
                  <div>
                    <p>
                      Bond energy is the energy required to break one mole of a
                      specific type of bond in gaseous molecules.
                    </p>
                    <p className="mt-2">Important concepts:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Stronger bonds require more energy to break</li>
                      <li>Bond formation releases energy</li>
                      <li>
                        The overall enthalpy change of a reaction can be
                        estimated using bond energies
                      </li>
                    </ul>
                    <img
                      src="/images/bond-energy-chart.jpg"
                      alt="Chart of bond energies for common chemical bonds"
                      className="mt-4 w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="bg-[#ecf0f1] rounded-lg p-6 shadow-inner">
            <h2 className="text-3xl font-semibold text-[#2c3e50] mb-4">
              Ask an Expert
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white text-[#2c3e50] placeholder-[#95a5a6] border border-[#bdc3c7] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white text-[#2c3e50] placeholder-[#95a5a6] border border-[#bdc3c7] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
              />
              <textarea
                name="question"
                placeholder="Your Advanced Thermochemistry Question"
                value={formData.question}
                onChange={handleInputChange}
                className="w-full bg-white text-[#2c3e50] placeholder-[#95a5a6] border border-[#bdc3c7] rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#4a90e2] hover:bg-[#3498db] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                Submit Question
              </button>
            </form>
          </section>

          <section className="lg:col-span-3 bg-[#ecf0f1] rounded-lg p-6 shadow-inner">
            <h2 className="text-3xl font-semibold text-[#2c3e50] mb-4">
              Interactive Reaction Energy Visualization
            </h2>
            <div className="flex flex-wrap justify-around items-end h-64 mb-4">
              {reactionData.map((reaction, index) => (
                <div key={index} className="flex flex-col items-center mb-4">
                  <div
                    className={`w-24 ${
                      reaction.energy < 0 ? "bg-[#3498db]" : "bg-[#e74c3c]"
                    } rounded-t-lg transition-all duration-500 ease-in-out`}
                    style={{ height: `${Math.abs(reaction.energy / 10)}%` }}
                  ></div>
                  <p className="text-[#2c3e50] text-sm mt-2 font-semibold">
                    {reaction.name}
                  </p>
                  <p className="text-[#34495e] text-xs">
                    {reaction.energy.toFixed(1)} kJ/mol
                  </p>
                  <p className="text-[#34495e] text-xs mt-1">
                    {reaction.equation}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={updateReactionData}
              className="mt-4 bg-[#4a90e2] hover:bg-[#3498db] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Simulate Reaction Energy Changes
            </button>
          </section>

          <section className="lg:col-span-3 bg-[#ecf0f1] rounded-lg p-6 shadow-inner">
            <h2 className="text-3xl font-semibold text-[#2c3e50] mb-4">
              Lecture: Thermochemistry in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">
                  Key Principles
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[#34495e]">
                  <li>First Law of Thermodynamics: Energy conservation</li>
                  <li>Enthalpy changes in chemical reactions</li>
                  <li>Calorimetry and heat capacity</li>
                  <li>Gibbs free energy and spontaneity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">
                  Real-world Applications
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[#34495e]">
                  <li>Fuel cell technology</li>
                  <li>Industrial process optimization</li>
                  <li>Environmental chemistry and climate science</li>
                  <li>Drug design and pharmacology</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">
                Visual Representation
              </h3>
              <img
                src="/images/thermochemistry-cycle.jpg"
                alt="Comprehensive thermochemistry cycle diagram"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </section>
        </main>
      </div>

      <footer className="mt-12 text-[#34495e] text-opacity-80 text-center">
        <p>
          &copy; 2023 Advanced Thermochemistry Guide. Empowering chemical
          understanding.
        </p>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        body {
          background-image: url('/textures/paper-texture.jpg');
          background-repeat: repeat;
          background-size: 300px 300px;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;