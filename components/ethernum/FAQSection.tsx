"use client";
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  content: React.ReactNode;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const faqRefs = useRef(new Map<number, HTMLDivElement>());
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (openIndex !== null && !isAnimating) {
      const element = faqRefs.current.get(openIndex);
      if (element) {
        scrollTimeoutRef.current = setTimeout(() => {
          const rect = element.getBoundingClientRect();
          const topPadding = 100;

          if (rect.top < topPadding || rect.top > window.innerHeight / 2) {
            const targetScroll = window.pageYOffset + rect.top - topPadding;

            window.scrollTo({
              top: Math.max(0, targetScroll),
              behavior: "smooth",
            });
          }
        }, 50);
      }
    }

    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [openIndex, isAnimating]);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  const toggleFAQ = (index: number) => {
    if (isAnimating) return;

    // If clicking on the currently open FAQ, just close it
    if (openIndex === index) {
      setOpenIndex(null);
      return;
    }

    // If another FAQ is open, close it and open the new one
    if (openIndex !== null && openIndex !== index) {
      setIsAnimating(true);
      setOpenIndex(null);

      animationTimeoutRef.current = setTimeout(() => {
        setOpenIndex(index);
        setIsAnimating(false);
      }, 400);
    } else {
      // No FAQ open, just open the clicked one
      setOpenIndex(index);
    }
  };

  const faqData: FAQItem[] = [
    {
      question: "What exactly is Aethernum?",
      content: (
        <div className="space-y-4">
          <p>
            Aethernum is a private, invitation-only protocol built to operate on the inefficiencies of the Ethereum
            market. It is not a retail product, not a public platform, and not a hype-driven project designed to capture
            the attention of the masses. Aethernum is designed for a very narrow circle of investors who understand
            illiquid markets, the value of early information, and the necessity of a rigorous method.
          </p>
          <p>The protocol combines three core components:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                AENIMA, an autonomous monetary intelligence engine that analyzes, selects and executes operations
                without emotional interference.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                High-velocity market making on meme assets, exploiting very early time windows where the market is still
                blind and inefficient.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                A private opportunity layer, based on real wallet behavior patterns, deployer signals, liquidity
                micro-structure and slippage dynamics.
              </span>
            </li>
          </ul>
          <p>
            Aethernum doesn't sell dreams. It offers access to a method. And when a method is replicable, it's worth
            more than any narrative.
          </p>
        </div>
      ),
    },
    {
      question: "How does Aethernum actually generate ROI?",
      content: (
        <div className="space-y-4">
          <p>
            Aethernum generates ROI by exploiting a permanent characteristic of the crypto market: the structural
            inefficiencies that exist in the early life cycles of assets on Ethereum.
          </p>
          <p>
            When a new token is born, before retail discovers it and before the crowd arrives, there is a very brief
            period where:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>liquidity is low but readable,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>wallet signals are clean,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>deployer behavior is obvious,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>Uniswap's micro-structure follows recurring patterns,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>and the market is not yet dominated by noise.</span>
            </li>
          </ul>
          <p>That is where Aethernum operates. The protocol creates ROI along three main vectors:</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">1. Intelligent Market Making</h4>
          <p>
            The system provides micro-liquidity only when there is an algorithmic edge, managing inventory and slippage
            mathematically, without taking directional risk.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">2. Early-Stage Positioning</h4>
          <p>
            AENIMA identifies accumulation windows where risk is minimal and value extraction potential is maximal,
            based on the behavior of early buyers and recurring clusters.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">3. Slippage Harvesting</h4>
          <p>
            When retail enters late and in a disordered way, it generates natural slippage. The protocol exits
            gradually, capturing that differential.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">Why HFTs and institutions can't operate here</h4>
          <p>
            HFT firms don't enter this early because liquidity is too low for them. Institutions cannot operate in these
            windows because their minimum size would immediately distort the market.
          </p>
          <p>
            Aethernum operates in a phase of the cycle where neither retail nor professional players can technically
            intervene - and that is exactly where the most profitable inefficiencies are born.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">
            The mathematical structure of the model: the PnL formula
          </h4>
          <p>
            Aethernum does not generate returns "by magic" or through artificial multiplication mechanisms. Returns are
            the output of a simple, verifiable and replicable formula - identical in logic to those used by professional
            desks operating on microstructural inefficiencies.
          </p>
          <p className="mt-4">Here is the synthetic representation:</p>
          <p className="text-center my-4 font-mono">
            PnL = (ΔSpread × Volume) + ΔSlippage(Positive) + ΔInventory(Micro-Gains) - (Fees + Bad Inventory)
          </p>
          <p>In practical operational terms, this means:</p>
          <ul className="space-y-3 ml-6 mt-4">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>ΔSpread × Volume:</strong> Profit generated from micro-spreads repeated many times inside
                low-noise market windows.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>ΔSlippage (Positive):</strong> The protocol sells when retail buys late and in oversized size →
                creating a monetizable differential.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>ΔInventory (Micro-Gains):</strong> Small gains derived from ultra-short oscillations typical of
                early-stage assets.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>Fees + Bad Inventory:</strong> Operational costs and micro-losses are subtracted, resulting in
                the actual net PnL.
              </span>
            </li>
          </ul>
          <p className="mt-4">
            This model is sustainable only in the first phases of a token's life, when the micro-structure is still
            inefficient and retail has not yet saturated the market. And it is precisely in this context that its
            mathematical core - simple in form yet sophisticated in execution - expresses maximum competitive advantage.
          </p>
          <p>It is a model built on data, not hope. On the hidden order of the market, not on its visible chaos.</p>
        </div>
      ),
    },
    {
      question: "Why do you operate exclusively on Ethereum L1?",
      content: (
        <div className="space-y-4">
          <p>Ethereum is the only ecosystem mature enough to provide:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>recurring behavioral patterns in deployers,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>wallet clusters with verifiable track records,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>liquidity micro-structures that remain stable over time,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>clear signals from Uniswap routers,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>sufficient depth to operate safely.</span>
            </li>
          </ul>
          <p>Other chains may be faster or cheaper, but they lack one fundamental element: signal quality.</p>
          <p>On Ethereum:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>noise is lower,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>manipulation is more difficult,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>behaviors are more repeatable,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>flows are more organic,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the market is more mature and predictable for those who know how to read below the surface.</span>
            </li>
          </ul>
          <p>In a model built on inefficiencies, having clean signals is everything.</p>
        </div>
      ),
    },
    {
      question: "What exactly is the AENIMA protocol?",
      content: (
        <div className="space-y-4">
          <p>
            AENIMA is the heart of Aethernum: an autonomous monetary engine that analyzes and interprets market behavior
            in real time.
          </p>
          <p>
            It is not a trading bot.
            <br />
            It is not a system based on technical indicators.
            <br />
            It is a model that studies human behavior as it is masked inside smart contracts and wallet movements.
          </p>
          <p>AENIMA:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>monitors every new deploy on Ethereum,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>filters out over 90% of assets,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>analyzes the behavior of early buyers,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>identifies recurring deployer patterns,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>evaluates liquidity quality,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>tracks cluster behavior,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>detects real accumulation windows,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>manages risk dynamically,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>executes entries and exits without emotional interference.</span>
            </li>
          </ul>

          <h4 className="font-bold text-brand-gold text-lg mt-6">Behavioral Mapping of early clusters</h4>
          <p>
            One of AENIMA's most advanced functions is its ability to map "early clusters": groups of wallets that recur
            in specific contexts and display repeated behaviors in the first minutes of an asset's life.
          </p>
          <p>The system analyzes:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>buying speed,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>average transaction size,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>correlations between wallets,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the deployer's previous history,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>recurring deployer signals.</span>
            </li>
          </ul>
          <p>
            This behavioral mapping allows the protocol to recognize hidden patterns that no human trader could identify
            in time.
          </p>
          <p>If a human had to do this work manually, it would take weeks. AENIMA does it in seconds.</p>
        </div>
      ),
    },
    {
      question: "How automated is the system really?",
      content: (
        <div className="space-y-4">
          <p>The protocol is designed to completely eliminate human risk.</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>80%</strong> of operations are fully autonomous: screening, signal detection, sizing, inventory
                management, exit triggers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>20%</strong> is technical supervision, not discretion: verification of signal integrity,
                Ethereum environment security, control of macro anomalies.
              </span>
            </li>
          </ul>
          <p>This means that no one, at any time:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>can manually decide to open a position,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>can increase size,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>can change risk model parameters,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>can disable an automatic exit.</span>
            </li>
          </ul>
          <p>
            Autonomy eliminates bias, panic, ego and human error.
            <br />
            The protocol operates the way a market should operate: cold, mathematical, methodical.
          </p>
        </div>
      ),
    },
    {
      question: "What does the weekly operational pipeline look like?",
      content: (
        <div className="space-y-4">
          <p>
            The pipeline is what separates Aethernum from any "retail" initiative. Each week, around 500-800 new tokens
            are launched on Ethereum. Our pipeline cuts through them with surgical precision:
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">1. Detection</h4>
          <p>All new deploys are identified in real time. No asset escapes.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">2. Immediate Filtering</h4>
          <p>90% are discarded immediately: suspicious deployers, no liquidity, clear anomalies or rug signals.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">3. Behavioral Screening</h4>
          <p>
            Around 50-70 assets survive and are evaluated in depth: real liquidity, early buyers' movements, recurring
            clusters.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">4. Active Monitoring</h4>
          <p>Only 10-15 assets show signals worth serious attention.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">5. Pre-Execution</h4>
          <p>The best assets enter an "operational observation" zone.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">6. Execution</h4>
          <p>Finally, only 1-2 assets are actually worked in an operational cycle.</p>

          <p className="mt-4">This process guarantees:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>extreme selectivity,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>methodological consistency,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>total independence from trends.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Does Aethernum take directional risk?",
      content: (
        <div className="space-y-4">
          <p>
            No.
            <br />
            Absolutely not.
            <br />
            Aethernum is not a traditional hedge fund and not a directional trader.
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>We do not "bet" on the growth of an asset.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>We do not chase price pumps.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>We do not follow narrative.</span>
            </li>
          </ul>
          <p>The protocol operates on levels that do not depend on price direction:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>liquidity structure,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>dynamics of early flows,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>natural retail slippage,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>behavior of intelligent wallets,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>recurring deployer patterns.</span>
            </li>
          </ul>

          <h4 className="font-bold text-brand-gold text-lg mt-6">Behavioral triggers as an operating lever</h4>
          <p>
            One of Aethernum's most significant advantages is its ability to recognize "behavioral triggers" from retail
            and early clusters: moments in which groups of wallets show repeating patterns tied to FOMO, panic, or
            irrational accumulation.
          </p>
          <p>These behaviors create:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>more profitable exit windows,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>predictable micro-bounces,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>overly aggressive retail entries that generate positive slippage.</span>
            </li>
          </ul>
          <p>
            AENIMA doesn't interpret emotions.
            <br />
            It intercepts the behavior that emotions produce on-chain.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">In summary</h4>
          <p>
            Aethernum does not depend on price direction, but on the invisible structure of the market: spread,
            slippage, early cluster behavior and micro-flows of liquidity.
          </p>
          <p>Returns do not come from the "movement" of the asset, but from its internal structure.</p>
        </div>
      ),
    },
    {
      question: "What is the expected risk/return profile?",
      content: (
        <div className="space-y-4">
          <p>
            Aethernum is not a traditional investment vehicle.
            <br />
            It is not a hedge fund, not a mutual fund, not a passive portfolio.
            <br />
            It is a protocol that extracts systematic inefficiencies from a specific segment of the market.
          </p>
          <p>
            Returns are not linear.
            <br />
            Volatility exists.
            <br />
            Risk is managed, but never eliminated.
          </p>
          <p>The protocol operates on three levels of structural defense:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>Extreme selectivity:</strong> only 1-2 assets out of 500-800 weekly are executed.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>Zero directional risk:</strong> the protocol does not depend on "price going up".
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>Automatic exits:</strong> every position has hard-coded stop conditions.
              </span>
            </li>
          </ul>
          <p className="mt-4">
            Aethernum does not promise fixed returns.
            <br />
            It does not promise "guaranteed profits".
            <br />
            It operates on a method, not on a fantasy.
          </p>
          <p>
            For those who understand what structural inefficiency means, the risk/return ratio is asymmetric.
            <br />
            For everyone else, it's just another name.
          </p>
        </div>
      ),
    },
    {
      question: "How is Aethernum different from a typical DeFi yield protocol?",
      content: (
        <div className="space-y-4">
          <p>
            Most DeFi protocols are built on incentives, inflation, or staking mechanics that require constant new
            entrants to sustain returns. Aethernum is not.
          </p>
          <p>Aethernum does not:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>rely on token emissions,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>depend on referrals,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>extract value from the depositors themselves,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>operate on artificial multipliers.</span>
            </li>
          </ul>
          <p>
            Aethernum extracts value from the market itself — from inefficiencies that exist externally, not internally.
            <br />
            This is the fundamental difference between a protocol that generates real ROI and one that redistributes
            deposits.
          </p>
        </div>
      ),
    },
    {
      question: "Can I lose money?",
      content: (
        <div className="space-y-4">
          <p>
            Yes.
            <br />
            Absolutely yes.
            <br />
            Anyone who tells you otherwise is lying.
          </p>
          <p>
            Aethernum is not a risk-free system.
            <br />
            It is not a guaranteed return vehicle.
            <br />
            It is not a savings account.
          </p>
          <p>
            The protocol operates on crypto assets in their earliest and most volatile phase. Despite rigorous filters,
            autonomous risk management, and a defensive method:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>Markets can behave irrationally.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>Assets can collapse.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>Unexpected anomalies can occur.</span>
            </li>
          </ul>
          <p>
            Aethernum mitigates risk, but does not eliminate it.
            <br />
            If you are not comfortable with real risk, this protocol is not for you.
          </p>
        </div>
      ),
    },
    {
      question: "What makes Aethernum more secure than other protocols?",
      content: (
        <div className="space-y-4">
          <p>Aethernum is not built on trust. It is built on structure.</p>
          <p>Most protocols ask you to "trust the team." Aethernum removes the team from the equation entirely.</p>
          <p>Security at Aethernum is not a feature. It is the architecture.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">1. Multi-signature fund control</h4>
          <p>
            No single person can move capital. Signatures are distributed across independent parties. Internal abuse is
            structurally impossible.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">2. Fully autonomous execution</h4>
          <p>
            No discretionary intervention is allowed. No one can manually open, close or modify positions. The protocol
            operates according to pre-defined, locked parameters.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">3. On-chain transparency</h4>
          <p>Every operation leaves a trace. Every movement is verifiable. Ethereum does not lie.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">4. External audit</h4>
          <p>
            The protocol has been reviewed by third-party entities that validate governance, risk engine, fund
            management, and operational logic.
          </p>

          <p className="mt-4">
            Aethernum does not ask for trust.
            <br />
            It offers verifiable structure.
          </p>
        </div>
      ),
    },
    {
      question: "How liquid is my capital inside the protocol?",
      content: (
        <div className="space-y-4">
          <p>
            Liquidity is a function of operational cycles, not arbitrary lockups.
            <br />
            Aethernum does not impose fixed lock periods for theatrical reasons.
          </p>
          <p>Capital liquidity follows a rational logic:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>During active operations:</strong> capital is deployed and cannot be withdrawn without breaking
                the operational integrity of the cycle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>
                <strong>Between cycles:</strong> withdrawal windows are available, subject to protocol capacity and
                notice requirements.
              </span>
            </li>
          </ul>
          <p>
            Aethernum is not designed for day-trading mentality.
            <br />
            It is designed for those who understand the value of patience and operational discipline.
          </p>
          <p>If you need instant liquidity at any moment, this is not the right protocol for you.</p>
        </div>
      ),
    },
    {
      question: "Is Aethernum audited?",
      content: (
        <div className="space-y-4">
          <p>Yes.</p>
          <p>Aethernum has undergone review by independent third-party entities that have validated:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>governance,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>risk engine,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>fund management,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>multisig structure,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>decision logic.</span>
            </li>
          </ul>

          <h4 className="font-bold text-brand-gold text-lg mt-6">2. Everything is verifiable on-chain</h4>
          <p>Every operation leaves a footprint:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>hashes,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>movements,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>slippage,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>timing,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>volumes.</span>
            </li>
          </ul>
          <p>Ethereum does not lie.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">3. Distributed governance</h4>
          <p>
            No single individual has control over funds or operational output.
            <br />
            The system is built to protect itself from human interference.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">4. Consistent results</h4>
          <p>
            Cycle stability is not the result of chance, but of repeatable patterns.
            <br />
            You don't need to see the engine to recognize the quality of the machine.
            <br />
            You just need to watch how it behaves.
          </p>
        </div>
      ),
    },
    {
      question: "Who controls the protocol's funds?",
      content: (
        <div className="space-y-4">
          <p>
            Funds are held through a multi-signature system with separated roles.
            <br />
            This separation completely removes internal abuse risk.
          </p>
          <p>Signatures are distributed across three layers:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>technical supervision,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>security,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>audit and verification.</span>
            </li>
          </ul>
          <p>
            No single key can move capital on its own.
            <br />
            No one, with a single signature, can modify risk parameters, intervene manually or manipulate the system.
          </p>
          <p>
            AENIMA operates strictly within approved and locked parameters.
            <br />
            Security is not optional: it is part of the structure.
          </p>
        </div>
      ),
    },
    {
      question: "How do you guarantee internal security and operational integrity?",
      content: (
        <div className="space-y-4">
          <p>Operational security at Aethernum never depends on trust in people, but on system architecture.</p>
          <p>
            The protocol is designed to prevent any form of manual intervention or manipulation, maintaining ecosystem
            integrity in an automatic and verifiable way.
          </p>
          <p>Every part of the process is structured to completely remove human error impact:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>no one can manually open or close a position,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>no one can alter operation size,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>risk model parameters are locked and verifiable,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>exit triggers cannot be disabled,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>funds only move through distributed multi-sig,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>every operation is recorded and any anomaly is identified.</span>
            </li>
          </ul>
          <p>
            This architecture eliminates any improper human interference at the root.
            <br />
            Security is not an opinion: it's a design.
          </p>
        </div>
      ),
    },
    {
      question: "Why is Aethernum invitation-only?",
      content: (
        <div className="space-y-4">
          <p>Because the quality of a protocol depends on the people inside it.</p>
          <p>Aethernum prefers:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>50 intelligent members</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>rather than 5,000 unprepared participants.</span>
            </li>
          </ul>
          <p>
            Being "closed" is not a marketing strategy:
            <br />
            it is a mechanism to protect the ecosystem.
          </p>
          <p>Aethernum seeks people who understand:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the value of silence,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the seriousness of risk management,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the mathematics of inefficiencies,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>operational discipline,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the nature of early-stage markets.</span>
            </li>
          </ul>
          <p>
            Anyone who is not aligned becomes a risk.
            <br />
            And the protocol does not accept unnecessary risk.
          </p>
        </div>
      ),
    },
    {
      question: "How do I request access?",
      content: (
        <div className="space-y-4">
          <p>
            To request access, you simply fill out a dedicated application form.
            <br />
            But the request is not equivalent to entry.
            <br />
            It is only the first step in a highly selective process.
          </p>
          <p>Once the form is submitted, the team evaluates:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>background,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>experience,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>risk understanding,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>profile adequacy,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>alignment with Aethernum's philosophy.</span>
            </li>
          </ul>
          <p>
            There is no automatic access.
            <br />
            No "join and try".
            <br />
            No free trial.
            <br />
            There is only selection.
          </p>
        </div>
      ),
    },
    {
      question: "What happens after I request access?",
      content: (
        <div className="space-y-4">
          <p>After submitting the form:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>your application is analyzed,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>financial and behavioral parameters are evaluated,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>your suitability for the protocol is assessed,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>compatibility with current operational capacity is checked.</span>
            </li>
          </ul>
          <p>
            Not everyone is accepted.
            <br />
            Not out of snobbery - out of structure.
            <br />
            Aethernum does not seek "indiscriminate investors".
            <br />
            It seeks people who improve system stability.
          </p>
        </div>
      ),
    },
    {
      question: "Is there a minimum capital requirement to participate?",
      content: (
        <div className="space-y-4">
          <p>
            Yes. The minimum capital to access the protocol is <strong>$100</strong>.
          </p>
          <p>
            This threshold does not reflect a technical limit — Aethernum can operate on much higher liquidity levels -
            but a deliberate choice:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>allow those who are truly suited to the protocol to enter without economic barriers,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>focus selection exclusively on:</span>
            </li>
          </ul>
          <ul className="space-y-3 ml-12">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>discipline,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>risk understanding,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>strategic attitude,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>respect for the club's philosophy,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>compatibility with the operational structure.</span>
            </li>
          </ul>
          <p>
            The protocol's effective operating capital does not depend on each individual member's deposit, but on
            aggregated allocation and algorithmic management. The minimum threshold only exists to keep the club
            accessible to those who pass selection.
          </p>
          <p>
            In Aethernum, it is not those with "more capital" who enter.
            <br />
            It is those who better understand the method.
            <br />
            The minimum capital is accessible.
            <br />
            Access, instead, remains selective.
          </p>
        </div>
      ),
    },
    {
      question: "What makes Aethernum different from any other crypto protocol?",
      content: (
        <div className="space-y-4">
          <p>Three fundamental elements:</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">1. We operate where the market doesn't look</h4>
          <p>
            Aethernum does not operate on trends, but in the micro-spaces hidden inside the blockchain.
            <br />
            It doesn't follow noise: it anticipates movement.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">2. We extract inefficiencies, not direction</h4>
          <p>The protocol does not bet on "what will go up". It simply extracts mathematical value from:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>micro-liquidity,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>retail slippage,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>behavioral patterns,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>systemic market errors.</span>
            </li>
          </ul>

          <h4 className="font-bold text-brand-gold text-lg mt-6">3. We grow through selection, not volume</h4>
          <p>
            Aethernum does not aim to reach millions of people and does not chase mass dynamics. We prefer a tight-knit,
            competent community perfectly aligned with the protocol's method.
          </p>
          <p>
            Every new entry is evaluated not by capital, but by profile quality and compatibility with our operational
            philosophy.
          </p>
          <p>
            To preserve ecosystem stability, when the optimal number of members is reached, Aethernum reserves the right
            to temporarily or indefinitely close access to the protocol.
          </p>
          <p>
            This guarantees a controlled, efficient environment free from external pressure.
            <br />
            Aethernum is a club that grants access to a real edge not a mass service.
            <br />
            For few, not for all.
            <br />
            For those who understand the protocol's first rule:
            <br />
            "Silence is a competitive advantage."
          </p>
        </div>
      ),
    },
    {
      question: "What prevents others from copying the model?",
      content: (
        <div className="space-y-4">
          <p>
            In theory, anyone can try to replicate an early-stage inefficiency extraction model. In practice, no one
            succeeds. And the reasons are structural.
          </p>
          <p>
            Aethernum's competitive advantage does not depend on a single element, but on a set of technical, behavioral
            and operational barriers which, combined, make the model non-replicable by external players.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">
            1. The know-how is not in the code, but in behavioral heuristics
          </h4>
          <p>The core of the protocol is not a bot or a set of static instructions. It is a system built on:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>deployer behavioral patterns,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>recurring early-buyer clusters,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>signals invisible to anyone without a structured historical archive,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>heuristics derived from years of observing wallet behavior.</span>
            </li>
          </ul>
          <p>
            These elements cannot be copied because they are not public.
            <br />
            They are the result of a proprietary dataset and models trained on thousands of real cases.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">2. The value lies in the data, not the algorithm</h4>
          <p>Most protocols think in terms of "code". Aethernum thinks in terms of "memory". The edge comes from:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>thousands of deploys analyzed,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>hundreds of clusters mapped,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>historicized behavioral signals,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>correlations invisible to external actors.</span>
            </li>
          </ul>
          <p>
            A competitor can copy the form, but not the substance: they do not own the data that makes the model
            intelligent.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">
            3. Operational speed is not replicable without dedicated architecture
          </h4>
          <p>
            AENIMA is built to react in seconds. The early-stage phase is a window that lasts very little. Those who
            arrive late don't see any inefficiencies left. Replicating this speed requires:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>dedicated infrastructure,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>real-time listeners,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>evolutionary filters,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>an integrated risk engine,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>a pre-trained behavioral archive.</span>
            </li>
          </ul>
          <p>This is not a bot from GitHub. It's a living system.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">4. Institutions cannot operate in those windows</h4>
          <p>Even if they wanted to copy us, they could not. Institutional players are constrained by:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>minimum sizes that are too large,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>internal compliance,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>slow decision-making,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>inability to enter assets with microscopic liquidity,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>excessive time-to-execution.</span>
            </li>
          </ul>
          <p>The edge exists precisely because large players cannot move that early.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">5. The private club protects the edge</h4>
          <p>Aethernum grows through selection, not volume. This means that:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>access is restricted,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the method is not disclosed,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>the pipeline is not exposed,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>no one can "sit inside" and study the system without being highly qualified.</span>
            </li>
          </ul>
          <p>
            Confidentiality is part of the competitive advantage.
            <br />
            There is no erosion because there is no exposure.
          </p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">
            6. Even copying the code, the model's intelligence would be missing
          </h4>
          <p>If a competitor cloned the infrastructure tomorrow:</p>
          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>they would have no historical dataset,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>they would not recognize recurring clusters,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>they would not understand weak signals,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>they would not know how to interpret early-stage micro-behaviors,</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-2 h-2 rounded-full bg-gradient-gold mt-2"></span>
              <span>they would not have the same heuristic pipeline.</span>
            </li>
          </ul>
          <p>The model is much closer to a brain than to a script.</p>

          <h4 className="font-bold text-brand-gold text-lg mt-6">In summary</h4>
          <p>
            Others can try to copy us. But without our memory, our pipeline, our speed, our data and our behavioral
            structure what they replicate will be empty.
          </p>
          <p>
            Aethernum is not an algorithm.
            <br />
            It is a method.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="faq-section" className="py-20 bg-[#474F50] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl tablet:text-4xl laptop:text-5xl font-bold font-heading text-center mb-4 laptop:mb-8 text-brand-gold">
          AETHERNUM FAQ
        </h2>
        <p className="text-center text-body mb-12 laptop:mb-16 max-w-3xl mx-auto">
          Everything you need to know about the protocol, the method, and the philosophy behind Aethernum.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) faqRefs.current.set(index, el);
                  else faqRefs.current.delete(index);
                }}
                className="bg-gray rounded-2xl overflow-hidden border-2 border-transparent hover:border-brand-gold/30 transition-all duration-300"
              >
                <h3 className="m-0 text-inherit">
                  <button
                    id={`faq-question-${index}`}
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-charcoal/30 transition-colors duration-200"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    disabled={isAnimating}
                  >
                    <span className="font-bold text-base laptop:text-xl pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`shrink-0 w-6 h-6 text-brand-gold transition-transform duration-400 ease-in-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? "5000px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s ease-in-out, opacity 0.4s ease-in-out",
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-body leading-relaxed">{faq.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
