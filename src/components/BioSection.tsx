'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import smileMemoji from '@/assets/images/memoji-smile.jpg';
import { Card } from '@/components/Card';
import { skillsJourney } from '@/data/skills';

export const BioSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative">
      <Card className="p-8 md:p-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 blur-2xl -z-10" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="relative">
            <motion.div
              className="relative mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/10">
                <Image
                  src={smileMemoji}
                  alt="Sem Joel Magene"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-transparent to-sky-500/30 mix-blend-overlay" />
              </div>

              <div className="absolute -bottom-3 -right-3 py-1 px-3 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full text-xs font-bold shadow-lg">
                HNG12 Finalist 🏆
              </div>
            </motion.div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-white/70">
                  Available for projects
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-xs">🌍</span>
                <span className="text-xs">Goma, DRC → Global Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <h3 className="font-serif text-3xl font-bold mb-3">
                Civil Engineer → Frontend Developer
              </h3>

              <p className="text-white/80 mb-6">
                Transformed my career from civil engineering to software
                development. What started with a laptop and Excel became a
                passion for creating exceptional web experiences. From HNG11
                elimination to HNG12 finalist (top 432 of 11,285) — my story is
                about rapid growth and resilience.
              </p>

              {/* Skill Journey Timeline */}
              <div className="relative pb-2">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-sky-500/50"></div>

                <div className="space-y-6 pl-6">
                  {skillsJourney.map((journey, index) => (
                    <motion.div
                      key={journey.category}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative">
                      <div className="absolute -left-6 top-0 w-3 h-3 rounded-full bg-white border-2 border-emerald-500"></div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-white/60 font-medium text-sm w-24">
                          {journey.category}:
                        </span>
                        {journey.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${
                              journey.category == 'Foundation'
                                ? 'from-amber-500/80 to-orange-500/80'
                                : journey.category == 'Advanced'
                                ? 'from-sky-500/80 to-blue-600/80'
                                : journey.category == 'Styling'
                                ? 'from-pink-500/80 to-purple-600/80'
                                : 'from-emerald-500/80 to-green-600/80'
                            }`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl mb-1">💪</div>
                  <div className="text-sm font-medium">Team Player</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-sm font-medium">Fast Learner</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl mb-1">🔄</div>
                  <div className="text-sm font-medium">Adaptable</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
