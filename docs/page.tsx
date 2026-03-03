import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  MonitorSmartphone,
  Youtube,
  MonitorX,
  XCircle,
  Lightbulb,
  Gamepad2,
  Cpu,
  Trophy,
  Target,
  FileCheck,
  Check,
  BookOpen,
  Medal,
} from "lucide-react";
import { FAQItem } from "@/components/landing/faq-item";

export const metadata: Metadata = {
  title: "KODIBOT – Platform Belajar Coding & STEM untuk Anak 8–15 Tahun",
  description:
    "Belajar coding dan Arduino dari nol dengan simulator interaktif. Tanpa perlu beli alat. Cocok untuk anak usia 8–15 tahun. Coba gratis sekarang.",
  keywords:
    "belajar coding untuk anak, kursus coding anak online, belajar Arduino untuk anak, platform STEM anak, coding untuk pemula anak",
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] font-[var(--font-lora)] selection:bg-[#F9DB2B]/30 selection:text-[#2D2D2D]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-[#E18914] text-white p-2 rounded-xl">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-[#E18914] font-['Montaser_Arabic',sans-serif]">
                Kodibot
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/register"
                className="text-[#6B7280] hover:text-[#E18914] font-medium transition-colors hidden sm:block"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="bg-[#E18914] hover:bg-[#c9780f] text-white px-5 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#E18914]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Coba Gratis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (High Conversion) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F9DB2B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#1D8536] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D8536]/10 border border-[#1D8536]/20 text-[#1D8536] font-medium text-sm mb-6 animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-[#F9DB2B]" />
                <span>Ubah Waktu Gadget Jadi Skill Masa Depan</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] tracking-tight mb-6 animate-fade-in-up animation-delay-100 leading-tight">
                Belajar Coding & STEM dari Nol{" "}
                <span className="text-[#E18914]">Tanpa Perlu Beli Alat</span>
              </h1>

              <p className="text-xl text-[#6B7280] mb-8 animate-fade-in-up animation-delay-200 leading-relaxed">
                Platform interaktif dimana anak 8-15 tahun bisa langsung praktik
                membuat robotika dan game menggunakan simulator bawaan. Aman,
                terstruktur, dan sangat menyenangkan!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300 mb-8">
                <Link
                  href="/register"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E18914] hover:bg-[#c9780f] text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl hover:shadow-[#E18914]/30 hover:-translate-y-1"
                >
                  Daftar Sekarang <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#demo"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-[#F3F4F6] text-[#2D2D2D] border border-gray-200 px-8 py-4 rounded-full text-lg font-bold transition-all hover:-translate-y-1"
                >
                  <PlayCircle className="w-5 h-5 text-[#1D8536]" /> Lihat Demo
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-[#6B7280] font-medium animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#1D8536]" /> Gratis Uji
                  Coba
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#1D8536]" /> Akses
                  Selamanya
                </div>
              </div>
            </div>

            {/* Visual Mockup - Split Screen Concept */}
            <div className="relative animate-fade-in-up animation-delay-200 lg:ml-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white flex flex-col h-[400px]">
                {/* Browser Header */}
                <div className="bg-gray-100 flex items-center gap-2 px-4 py-3 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-white rounded-md flex-1 mx-4 h-6 text-xs flex items-center px-3 text-gray-400 font-mono">
                    kodibot.id/learn/arduino-dasar
                  </div>
                </div>
                {/* Split Screen Body */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Left: Instructions */}
                  <div className="w-5/12 border-r border-gray-200 p-6 bg-[#F3F4F6] overflow-hidden relative">
                    <div className="w-12 h-4 mb-4 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="w-full h-3 mb-2 bg-[#E18914]/30 rounded-full"></div>
                    <div className="w-[80%] h-3 mb-6 bg-gray-300 rounded-full"></div>

                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white rounded-xl shadow-sm border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex justify-center items-center">
                          <Check className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-[#2D2D2D]">
                          Misi Selesai!
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500">
                        Hebat, lampu LED berhasil menyala!
                      </p>
                    </div>
                  </div>
                  {/* Right: Simulator */}
                  <div className="w-7/12 bg-[#2D2D2D] p-4 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
                    <div className="relative z-10 flex flex-col gap-4 items-center">
                      <div className="w-48 h-12 bg-gray-100 rounded-md flex p-1 justify-center gap-1 shadow-inner">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-1 justify-center"
                          >
                            <div className="w-2 h-2 rounded-full bg-gray-300 shadow-inner"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300 shadow-inner"></div>
                          </div>
                        ))}
                      </div>
                      <div className="w-40 h-28 bg-[#1D8536] rounded-md shadow-lg relative border border-green-700/50">
                        <div className="absolute top-2 left-2 w-8 h-8 bg-gray-300 rounded-sm"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-gray-800 rounded-full"></div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                          <Cpu className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,1)] animate-pulse"></div>
                      </div>
                      <div className="absolute left-[40%] top-[40%] w-[30%] h-1 bg-red-500 rounded-full transform -rotate-45 z-0 shadow-sm"></div>
                      <div className="absolute left-[45%] top-[55%] w-[25%] h-1 bg-black rounded-full transform -rotate-12 z-0 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border-2 border-[#1D8536] text-[#1D8536] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <Target className="w-8 h-8" />
                <div>
                  <div className="font-bold text-lg leading-none">
                    100% Praktik
                  </div>
                  <div className="text-sm text-gray-500">
                    Langsung di Browser!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-12">
            Apakah Anak Anda Habiskan Waktu di Gadget Tanpa Skill Nyata?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <Youtube className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="font-bold text-[#2D2D2D] mb-2">Hanya Pasif Menonton</h3>
              <p className="text-[#6B7280] text-sm">
                Terlalu banyak menonton hiburan tanpa ada interaksi atau hasil
                karya yang dibuat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <MonitorX className="w-7 h-7 text-[#E18914]" />
              </div>
              <h3 className="font-bold text-[#2D2D2D] mb-2">Bermain Game Terus</h3>
              <p className="text-[#6B7280] text-sm">
                Asyik bermain game buatan orang lain, tapi tidak tahu cara
                menciptakan gamenya sendiri.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <XCircle className="w-7 h-7 text-gray-500" />
              </div>
              <h3 className="font-bold text-[#2D2D2D] mb-2">Hardware Mahal & Ribet</h3>
              <p className="text-[#6B7280] text-sm">
                Mau belajar robotika, tapi takut mahal beli Arduino dan bingung
                cara setup awalnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 bg-white" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D8536]/10 text-[#1D8536] font-bold text-sm mb-4">
              ✨ Solusi dari Kodibot
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-6">
              Dengan Kodibot, Anak Belajar Melalui Praktik, Bukan Sekadar
              Menonton
            </h2>
            <p className="text-lg text-[#6B7280]">
              Kami ubah anak Anda dari &quot;Konsumen Teknologi&quot; menjadi
              &quot;Pencipta Teknologi&quot;. Semua materi dirancang interaktif
              agar konsep sesulit apapun jadi mudah dipahami logika anak.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#2D2D2D] p-2 aspect-video relative flex items-center justify-center group">
              <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"
                aria-hidden
              />
              <div className="w-16 h-16 bg-[#E18914] text-white rounded-full flex items-center justify-center z-10 cursor-pointer shadow-[0_0_30px_rgba(225,137,20,0.6)] group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 ml-1" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F9DB2B]/20 rounded-xl flex items-center justify-center mt-1">
                  <FileCheck className="w-6 h-6 text-[#E18914]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                    Panduan Tahap Demi Tahap
                  </h3>
                  <p className="text-[#6B7280]">
                    Sistem belajar terstruktur dari nol dengan instruksi di
                    sebelah kiri layar yang harus diselesaikan untuk lanjut ke
                    modul berikutnya.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1D8536]/10 rounded-xl flex items-center justify-center mt-1">
                  <MonitorSmartphone className="w-6 h-6 text-[#1D8536]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                    Langsung Evaluasi di Browser
                  </h3>
                  <p className="text-[#6B7280]">
                    Tidak perlu install aplikasi. Anak langsung merakit coding
                    dan menekan tombol &apos;Play&apos; untuk melihat hasilnya di
                    simulator virtual.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mt-1">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                    100% Bebas Beli Hardware (Aman)
                  </h3>
                  <p className="text-[#6B7280]">
                    Belajar Arduino real tanpa risiko korslet! Komponen kabel,
                    LED, servo, semua ada di dalam layar dengan perilaku fisika
                    yang nyata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 STEPS) */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-4">
              Bagaimana Cara Belajarnya?
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Tiga langkah sederhana untuk memastikan anak benar-benar paham
              materi yang diajarkan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200" />

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-[#F3F4F6] shadow-xl rounded-full flex items-center justify-center mb-6 z-10">
                <BookOpen className="w-10 h-10 text-[#E18914]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">1. Belajar</h3>
              <p className="text-[#6B7280]">
                Tonton video animasi pendek atau baca komik interaktif yang
                menjelaskan logika dasar coding.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#E18914] border-4 border-[#F3F4F6] shadow-xl shadow-[#E18914]/30 rounded-full flex items-center justify-center mb-6 z-10 text-white">
                <Gamepad2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">2. Praktik</h3>
              <p className="text-[#6B7280]">
                Kerjakan tantangan di Interactive Simulator. Jika salah, anak
                dilatih untuk melakukan <strong>Debugging</strong> mandiri.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-[#F3F4F6] shadow-xl rounded-full flex items-center justify-center mb-6 z-10">
                <Trophy className="w-10 h-10 text-[#1D8536]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">3. Ciptakan</h3>
              <p className="text-[#6B7280]">
                Setelah lulus modul inti, anak bebas membuat kreasi project
                robot/game mereka secara mandiri di &quot;Playground&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURE HIGHLIGHT – INTERACTIVE SIMULATOR */}
      <section className="py-24 bg-[#2D2D2D] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Montaser_Arabic',sans-serif] mb-6">
                Simulator Kelas Dunia Terintegrasi di Dalam Silabus
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Platform kodibot tidak sekedar meminjam simulator publik.
                Simulator interaktif Blockly & Arduino kami tertanam langsung
                dengan misi pembelajaran. Sistem mendeteksi otomatis jika kabel
                atau kode anak sudah tepat!
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Sistem Pengecekan Smart</strong> - Mengoreksi otomatis
                    rakitan anak tanpa campur tangan orang tua.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Blockly ke Teks</strong> - Anak merakit visual blocks,
                    namun bisa melihat langsung struktur teks C++ sesungguhnya
                    (Transisi mulus ke level Pro).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F9DB2B] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong>Tinggal Buka Browser</strong> - Tanpa unduh puluhan
                    Gigabyte seperti software berat di luar sana.
                  </span>
                </li>
              </ul>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-[#E18914] hover:bg-[#c9780f] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(225,137,20,0.4)] hover:-translate-y-1"
              >
                Cobain Simulatornya Gratis
              </Link>
            </div>

            <div className="relative">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-[#1D8536] to-[#E18914] opacity-20 absolute -right-20 -bottom-20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
                alt="Arduino STEM Learning"
                className="rounded-3xl shadow-2xl relative z-10 border border-gray-700"
              />
              <div className="absolute top-10 -left-10 bg-white text-[#2D2D2D] p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-bounce">
                <Bot className="w-8 h-8 text-[#E18914]" />
                <div>
                  <div className="font-bold">Misi 03 Selesai!</div>
                  <div className="text-xs text-gray-500">
                    Logika IF-ELSE diterapkan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEARNING PATH SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-4">
            Peta Pembelajaran Terarah
          </h2>
          <p className="text-[#6B7280] mb-16 max-w-2xl mx-auto">
            Kami tidak melempar anak ke ratusan video secara acak. Anak Anda
            akan diiring menaiki tangga kesulitan yang pas, layaknya level di
            dalam video game.
          </p>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-[6.5rem] left-0 right-0 h-1 bg-[#F3F4F6] -z-10" />

            <div className="pt-8 relative">
              <div className="w-8 h-8 rounded-full bg-[#F9DB2B] text-white font-bold flex items-center justify-center absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white z-10 shadow-sm">
                1
              </div>
              <div className="bg-[#F3F4F6] rounded-2xl p-6 h-full border border-gray-100 mt-20 hover:-translate-y-2 transition-transform">
                <h4 className="font-bold text-[#2D2D2D] text-lg mb-2">
                  Scratch Basics
                </h4>
                <p className="text-sm text-[#6B7280]">
                  Memahami logika looping, kondisi, dan variabel lewat pembuatan
                  Game & Animasi.
                </p>
              </div>
            </div>
            <div className="pt-8 relative">
              <div className="w-8 h-8 rounded-full bg-[#1D8536] text-white font-bold flex items-center justify-center absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white z-10 shadow-sm">
                2
              </div>
              <div className="bg-[#F3F4F6] rounded-2xl p-6 h-full border border-gray-100 mt-20 hover:-translate-y-2 transition-transform">
                <h4 className="font-bold text-[#2D2D2D] text-lg mb-2">
                  MakeCode IoT
                </h4>
                <p className="text-sm text-[#6B7280]">
                  Transisi dari layar komputer ke benda fisik virtual. Interaksi
                  sensor dan perangkat Micro:bit.
                </p>
              </div>
            </div>
            <div className="pt-8 relative">
              <div className="w-8 h-8 rounded-full bg-[#E18914] text-white font-bold flex items-center justify-center absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white z-10 shadow-sm">
                3
              </div>
              <div className="bg-[#E18914]/10 rounded-2xl p-6 h-full border border-[#E18914]/30 mt-20 hover:-translate-y-2 transition-transform">
                <h4 className="font-bold text-[#E18914] text-lg mb-2">
                  Arduino Virtual
                </h4>
                <p className="text-sm text-[#E18914]/80">
                  Merakit sirkuit elektronika, breadboard, dan bahasa programming
                  terstruktur C++ berbasis blok visual.
                </p>
              </div>
            </div>
            <div className="pt-8 relative">
              <div className="w-8 h-8 rounded-full bg-[#2D2D2D] text-white font-bold flex items-center justify-center absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white z-10 shadow-sm">
                4
              </div>
              <div className="bg-[#2D2D2D] rounded-2xl p-6 h-full border-gray-100 mt-20 hover:-translate-y-2 transition-transform">
                <h4 className="font-bold text-white text-lg mb-2">
                  Proyek Bebas Nyata
                </h4>
                <p className="text-sm text-gray-400">
                  Siap membeli alat asli, dan coding di dunia nyata.
                  Implementasi di Arduino fisik tanpa takut salah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUTCOME SECTION */}
      <section className="py-24 bg-[#E18914] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-['Montaser_Arabic',sans-serif] mb-6 leading-tight">
                Setelah Lulus Kodibot, Anak Anda Akan Mampu:
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Gamepad2 className="w-8 h-8 text-[#F9DB2B] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Membuat Game Sendiri</h4>
                    <p className="text-white/80">
                      Berhenti cuma main, dan ciptakan karya. Menambah daya
                      kreasi luar biasa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Cpu className="w-8 h-8 text-[#1D8536] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Merakit Rangkaian Elektronika
                    </h4>
                    <p className="text-white/80">
                      Tahu logika kelistrikan dasar, sensor, dan komponen tanpa
                      membakar apapun di rumah.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Lightbulb className="w-8 h-8 text-white shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Miliki Logika Computational Thinking
                    </h4>
                    <p className="text-white/80">
                      Bisa memecah masalah besar jadi sekumpulan anak-tangga
                      solusi. Ini adalah pondasi anak sukses masa depan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <Medal className="w-8 h-8 text-[#F9DB2B] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Siap Ikut Lomba Robotika</h4>
                    <p className="text-white/80">
                      Dengan pondasi C++, transisi mereka untuk berlomba di
                      level SD dan SMP menjadi teramat mudah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80"
                alt="Kid coding success"
                className="rounded-3xl shadow-2xl rotate-3 scale-105 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPARISON TABLE */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-4">
              Mengapa Memilih Kodibot?
            </h2>
            <p className="text-[#6B7280]">
              Kami merancang masa depan pendidikan yang berbeda secara
              fundamental.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 bg-gray-50 border-b border-r border-gray-200 text-[#2D2D2D] font-bold w-1/4">
                    Fitur Utama
                  </th>
                  <th className="p-6 border-b border-r border-gray-200 text-gray-500 font-bold text-center w-1/4 bg-gray-50">
                    Belajar dari YouTube
                  </th>
                  <th className="p-6 border-b border-r border-gray-200 text-gray-500 font-bold text-center w-1/4 bg-gray-50">
                    Kursus Offline Klasik
                  </th>
                  <th className="p-6 border-b border-[#E18914] bg-[#E18914]/10 text-[#E18914] font-bold text-center w-1/4 text-lg">
                    Platform Kodibot
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <tr>
                  <td className="p-6 border-b border-r border-gray-200 font-medium">
                    Kurikulum Bimbingan & Terstruktur
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-red-500">
                    <XCircle className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-green-500">
                    <CheckCircle2 className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-6 border-b bg-[#E18914]/5 text-center text-[#1D8536] font-bold">
                    <CheckCircle2 className="w-6 h-6 mx-auto" /> CSTA Aligned
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-gray-200 font-medium">
                    Tanpa Perlu Beli Hardware Mahal
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-red-500">
                    <XCircle className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-red-500">
                    <XCircle className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-6 border-b bg-[#E18914]/5 text-center text-[#1D8536] font-bold">
                    <CheckCircle2 className="w-6 h-6 mx-auto" /> Simulator Bawaan
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-gray-200 font-medium">
                    Sistem Evaluasi / Koreksi Otomatis
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-red-500">
                    <XCircle className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-gray-500">
                    Manual Guru
                  </td>
                  <td className="p-6 border-b bg-[#E18914]/5 text-center text-[#1D8536] font-bold">
                    <CheckCircle2 className="w-6 h-6 mx-auto" /> AI Validation
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-r border-gray-200 font-medium">
                    Fleksibel (Kapan Saja & Kecepatan Anak)
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-green-500">
                    <CheckCircle2 className="w-5 h-5 mx-auto" />
                  </td>
                  <td className="p-6 border-b border-r border-gray-200 text-center text-red-500">
                    <XCircle className="w-5 h-5 mx-auto" /> Jadwal Kaku
                  </td>
                  <td className="p-6 border-b bg-[#E18914]/5 text-center text-[#1D8536] font-bold">
                    <CheckCircle2 className="w-6 h-6 mx-auto" /> 24/7 Tersedia
                  </td>
                </tr>
                <tr>
                  <td className="p-6 border-r border-gray-200 font-medium rounded-bl-3xl">
                    Biaya
                  </td>
                  <td className="p-6 border-r border-gray-200 text-center text-gray-500">
                    Gratis (Tapi acak-acakan)
                  </td>
                  <td className="p-6 border-r border-gray-200 text-center text-gray-500">
                    Rp 500k - 2Juta / Bulan
                  </td>
                  <td className="p-6 bg-[#E18914]/5 text-center text-[#E18914] font-extrabold rounded-br-3xl">
                    Cukup 1x Bayar (Lifetime)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. PRICING SECTION */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-4">
              Investasi Ilmu Sekali, Berguna Sepanjang Hidup
            </h2>
            <p className="text-[#6B7280]">
              Tidak ada biaya langganan bulanan. Tidak perlu keluar biaya jutaan
              untuk alat fisik di awal belajar.
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 inset-x-0 bg-[#1D8536] text-white text-center py-2 font-bold text-sm tracking-widest uppercase">
              🏷️ PROMO HARGA LAUNCHING
            </div>

            <div className="p-10 pt-16 text-center border-b border-gray-100">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                Kelas Full Access (Lifetime)
              </h3>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-gray-400 line-through text-2xl font-medium">
                  Rp1.490.000
                </span>
              </div>
              <div className="text-6xl font-extrabold text-[#E18914] font-['Montaser_Arabic',sans-serif] tracking-tighter">
                <span className="text-3xl align-top">Rp</span>399
                <span className="text-3xl">rb</span>
              </div>
              <p className="mt-4 text-[#6B7280] font-medium">
                Bayar sekali, milik anak Anda selamanya.
              </p>
            </div>

            <div className="p-10 bg-[#F3F4F6]/50">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] shrink-0" />{" "}
                  <span className="text-[#2D2D2D] font-medium">
                    Akses Kurikulum Scratch, MakeCode, Arduino Dasar
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] shrink-0" />{" "}
                  <span className="text-[#2D2D2D] font-medium">
                    Full Interactive Simulator Berbasis Browser
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] shrink-0" />{" "}
                  <span className="text-[#2D2D2D] font-medium">
                    Free Update Materi Modul Baru Kedepannya
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] shrink-0" />{" "}
                  <span className="text-[#2D2D2D] font-medium">
                    Tracking Progress untuk Orang Tua
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1D8536] shrink-0" />{" "}
                  <span className="text-[#2D2D2D] font-medium">
                    E-Certificate setelah kelulusan akhir
                  </span>
                </li>
              </ul>
              <Link
                href="/register"
                className="w-full flex items-center justify-center bg-[#E18914] text-white py-5 rounded-2xl text-xl font-bold hover:bg-[#c9780f] transition-all shadow-xl hover:shadow-[#E18914]/40"
              >
                Dapatkan Akses Sekarang
              </Link>
              <div className="mt-4 text-center">
                <Link
                  href="/register"
                  className="text-sm text-[#E18914] font-medium hover:underline"
                >
                  Skeptis? Coba Gratis Modul Pertama Dulu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION (SEO Optimized) */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D2D2D] font-['Montaser_Arabic',sans-serif] mb-4">
              Pertanyaan Orang Tua (FAQ)
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="Apakah platform ini cocok untuk anak tanpa pengalaman coding (pemula)?"
              answer="Sangat cocok! Kurikulum Kodibot dirancang khusus dari nol. Kami memulai dengan visual block coding (menyusun blok seperti Lego) di Scratch, sehingga anak tidak akan dipusingkan dengan menulis teks kode kompleks secara langsung."
            />
            <FAQItem
              question="Apakah saya perlu membeli hardware seperti Arduino fisik sebelum belajar?"
              answer="Tidak! Itu adalah keunggulan utama Kodibot. Semua kelas telah dilengkapi dengan Simulator Interactive dalam browser. Anak Anda dapat memasang kabel virtual, menyalakan LED virtual, dan mengetes sensor tanpa memiliki barang fisiknya. Anda baru direkomendasikan beli versi fisik (opsional) setelah anak lulus dan paham fondasinya."
            />
            <FAQItem
              question="Apakah ada opsi free trial (uji coba gratis)?"
              answer="Tentu saja. Anda cukup mendaftar dan akun anak akan otomatis memiliki akses ke Modul 1 secara penuh tanpa perlu memasukkan kartu kredit apalagi bayar deduksi di akhir bulan."
            />
            <FAQItem
              question="Berapa lama waktu yang dibutuhkan untuk menyelesaikan kelasnya?"
              answer="Kami menerapkan sistem 'Self-Paced Learning'. Anak bebas belajar kapan saja dan durasinya disesuaikan gaya belajar masing-masing. Rata-rata anak menyelesaikan 1 modul (topik) dalam waktu 30-45 menit."
            />
            <FAQItem
              question="Apakah anak saya akan dapat sertifikat?"
              answer="Ya. E-Certificate kelulusan otomatis akan diterbitkan setiap kali anak menyelesaikan milestone besar di modul pembelajaran. Sertifikat ini bisa digunakan di portofolio anak menuju sekolah unggulan nantinya."
            />
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="relative py-24 bg-[#1D8536] overflow-hidden text-center">
        <div
          className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat mix-blend-overlay"
          aria-hidden
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-[#F9DB2B] rounded-full blur-[150px] opacity-20 pointer-events-none"
          aria-hidden
        />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-['Montaser_Arabic',sans-serif] mb-6 leading-tight">
            Berikan Keahlian Masa Depan yang Tahan Banting Kepada Anak Anda Hari
            Ini.
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Ayo bergabung dengan ekosistem Kodibot Parents yang peduli soal STEM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="w-full sm:w-auto bg-[#E18914] hover:bg-[#F9DB2B] hover:text-[#2D2D2D] text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_30px_rgba(225,137,20,0.5)] transform hover:scale-105"
            >
              Mulai Uji Coba Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] border-t border-[#1a1a1a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 grayscale brightness-200">
              <Bot className="w-6 h-6 text-[#E18914]" />
              <span className="text-xl font-bold text-white font-['Montaser_Arabic',sans-serif]">
                Kodibot
              </span>
            </div>

            <div className="flex gap-6 text-gray-400 font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a
                href="mailto:hello@kodibot.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kodibot Learning Platform. Platform
            Belajar Coding & Arduino untuk Anak Indonesia.
          </div>
        </div>
      </footer>

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
}
