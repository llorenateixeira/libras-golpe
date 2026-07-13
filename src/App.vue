<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QrSection from "./components/QrSection.vue";
import {
  AudioLines,
  BookText,
  CircleDollarSign,
  Headset,
  LayoutGrid,
  Link2,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
} from "@lucide/vue";
import { navItems, scams, sources, videoUrl } from "./data/content";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);
let gsapContext;
let librasWidgetLoaded = false;

const heroHighlights = [
  {
    icon: LayoutGrid,
    label: "leitura visual clara",
  },
  {
    icon: QrCode,
    label: "acesso rápido em Libras",
  },
  {
    icon: ShieldCheck,
    label: "prevenção direta e objetiva",
  },
];

const scamIconMap = {
  "user-round": UserRound,
  "link-2": Link2,
  headset: Headset,
  "circle-dollar-sign": CircleDollarSign,
  "audio-lines": AudioLines,
};

function resolveScamIcon(iconName) {
  return scamIconMap[iconName] || Sparkles;
}

function setupScamAnimations() {
  if (!pageRef.value) return;

  gsapContext = gsap.context((self) => {
    const q = self.selector;

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(q(".hero-topbar"), {
        autoAlpha: 0,
        y: -18,
        duration: 0.55,
      })
      .from(
        q(".hero-copy > *"),
        {
          autoAlpha: 0,
          y: 28,
          duration: 0.72,
          stagger: 0.08,
        },
        "-=0.18",
      )
      .from(
        q(".hero-visual"),
        {
          autoAlpha: 0,
          x: 26,
          scale: 0.96,
          duration: 0.9,
        },
        "-=0.55",
      );

    const revealSections = [".info-card", ".qr-shell", ".sources-card"];

    revealSections.forEach((selector) => {
      const element = q(selector)[0];
      if (!element) return;

      gsap.from(element, {
        autoAlpha: 0,
        y: 34,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    const staggerGroups = [".info-pill-grid span", ".source-item"];

    staggerGroups.forEach((selector) => {
      const items = q(selector);
      if (!items.length) return;

      gsap.from(items, {
        autoAlpha: 0,
        y: 24,
        scale: 0.97,
        duration: 0.58,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: items[0],
          start: "top 82%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    gsap.from(q(".featured-scams-parallax__header"), {
      autoAlpha: 0,
      y: 26,
      duration: 0.62,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".featured-scams-parallax")[0],
        start: "top 78%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    const featuredScamCards = q(".featured-scam-card");

    featuredScamCards.forEach((card) => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 42,
        scale: 0.985,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });
  }, pageRef.value);
}

function setupLibrasWidget() {
  if (typeof window === "undefined" || librasWidgetLoaded) return;

  const existingScript = document.querySelector(
    'script[data-vlibras-widget="true"]',
  );

  const bootWidget = () => {
    if (librasWidgetLoaded) return;
    if (!window.VLibras || !window.VLibras.Widget) return;

    new window.VLibras.Widget("https://vlibras.gov.br/app");
    librasWidgetLoaded = true;
  };

  if (window.VLibras && window.VLibras.Widget) {
    bootWidget();
    return;
  }

  if (existingScript) {
    existingScript.addEventListener("load", bootWidget, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
  script.async = true;
  script.defer = true;
  script.dataset.vlibrasWidget = "true";
  script.addEventListener("load", bootWidget, { once: true });
  document.body.appendChild(script);
}

onMounted(() => {
  nextTick(() => {
    setupLibrasWidget();
    setupScamAnimations();
    ScrollTrigger.refresh();
  });
});

onBeforeUnmount(() => {
  if (gsapContext) {
    gsapContext.revert();
  }
});
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

  <main id="conteudo" ref="pageRef">
    <section id="tema" class="container hero-section py-4 py-lg-5">
      <div class="hero-topbar">
        <a class="hero-brand" href="#tema">
          <span class="brand-badge">Libras</span>
          <span class="brand-text">Material visual acessível</span>
        </a>

        <nav class="hero-nav" aria-label="Navegação principal">
          <a
            v-for="item in navItems"
            :key="item.href"
            class="hero-nav__link"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>

      <div class="row align-items-center g-4 g-lg-5">
        <div class="col-lg-7 hero-copy">
          <p class="eyebrow">Tema ou título</p>
          <h1 class="display-title">
            Cinco golpes digitais e como preveni-los com informação acessível em
            Libras
          </h1>
          <p class="lead text-secondary-custom">
            Conheça golpes comuns, entenda como eles acontecem e veja formas
            simples de prevenção.
          </p>

          <div class="d-flex flex-wrap gap-3 mt-4">
            <a class="btn btn-accent btn-lg rounded-pill px-4" href="#golpes"
              >Ver os 5 golpes</a
            >
            <a
              class="btn btn-outline-theme btn-lg rounded-pill px-4"
              href="#libras"
              >Ver QR Code</a
            >
          </div>

          <div class="hero-highlights" aria-label="Destaques da página">
            <span
              v-for="item in heroHighlights"
              :key="item.label"
              class="hero-highlight-pill"
            >
              <component :is="item.icon" aria-hidden="true" />
              {{ item.label }}
            </span>
          </div>
        </div>

        <div class="col-lg-5 hero-visual">
          <div class="hero-poster glass-card">
            <div class="hero-poster__ribbon">
              <Sparkles aria-hidden="true" />
              prevenção visual para pessoas surdas
            </div>

            <img
              class="img-fluid hero-image"
              src="/assets/hero-landing.svg"
              alt="Ilustração com celular, escudo, mãos sinalizando e elementos visuais de acessibilidade."
            />

            <div class="hero-poster__footer">
              <span><Smartphone aria-hidden="true" /> mobile first</span>
              <span><QrCode aria-hidden="true" /> QR para Libras</span>
              <span><BookText aria-hidden="true" /> guia visual</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sobre" class="container info-section py-3 py-lg-4">
      <div class="info-card">
        <div class="info-card__top">
          <div>
            <p class="eyebrow">Sobre o site</p>
            <div class="section-headline">
              <h2 class="section-title">
                Um guia visual para evitar golpes digitais
              </h2>
              <span class="headline-badge">
                <ShieldCheck aria-hidden="true" />
                conteúdo educativo
              </span>
            </div>
          </div>

          <div class="info-card__seal" aria-hidden="true">
            <Smartphone />
          </div>
        </div>

        <div class="info-mini-grid">
          <article class="info-mini-card">
            <span class="info-mini-card__icon">
              <Sparkles aria-hidden="true" />
            </span>
            <h3>Dicas de prevenção</h3>
            <p>
              Alertas simples para identificar sinais de golpe no dia a dia.
            </p>
          </article>

          <article class="info-mini-card">
            <span class="info-mini-card__icon">
              <LayoutGrid aria-hidden="true" />
            </span>
            <h3>Exemplos</h3>
            <p>
              Cinco casos comuns explicados de forma curta, direta e visual.
            </p>
          </article>

          <article class="info-mini-card">
            <span class="info-mini-card__icon">
              <BookText aria-hidden="true" />
            </span>
            <h3>Cartilha</h3>
            <p>
              Conteúdo organizado para consulta rápida, com foco em prevenção.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="golpes" class="featured-scams-parallax mt-4">
      <div class="featured-scams-parallax__bg" aria-hidden="true"></div>
      <div class="container">
        <div class="featured-scams-parallax__inner py-4 py-lg-5">
          <div class="featured-scams-parallax__header">
            <span class="featured-scams-parallax__overline"
              >Cartilha de prevenção</span
            >
            <h2 class="featured-scams-parallax__title">
              Cinco golpes explicados com
              <span class="brand-gradient-text"
                >prevenção simples e visual</span
              >
            </h2>
            <p class="featured-scams-parallax__desc">
              A ideia desta seção é mostrar como o golpe acontece, quais sinais
              chamam atenção e o que fazer para evitar cair nele.
            </p>
          </div>

          <div class="featured-parallax-cards-wrapper">
            <article
              v-for="(scam, index) in scams"
              :key="scam.title"
              class="featured-parallax-card featured-scam-card"
              :class="[
                scam.tone,
                { 'featured-scam-card--reverse': index % 2 === 1 },
              ]"
              :style="{
                '--card-index': index,
                '--card-z': index + 1,
              }"
            >
              <div class="featured-scam-card__media">
                <div class="featured-scam-card__media-inner">
                  <template v-if="scam.image">
                    <img
                      class="featured-scam-card__image"
                      :src="scam.image"
                      :alt="scam.imageAlt || scam.title"
                    />
                    <span class="featured-scam-card__image-label">{{
                      scam.label
                    }}</span>
                  </template>
                  <template v-else>
                    <span class="featured-scam-card__label">{{
                      scam.label
                    }}</span>
                    <component
                      :is="resolveScamIcon(scam.icon)"
                      class="featured-scam-card__media-icon"
                      aria-hidden="true"
                    />
                    <div
                      class="featured-scam-card__media-grid"
                      aria-hidden="true"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </template>
                </div>
              </div>

              <div class="featured-scam-card__content">
                <span class="featured-scam-card__kicker">0{{ index + 1 }}</span>
                <h3>{{ scam.title }}</h3>
                <p>{{ scam.description }}</p>
                <ul class="featured-scam-card__features">
                  <li v-for="feature in scam.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
                <div class="featured-scam-card__cta">
                  <strong>Como prevenir:</strong>
                  <span>{{ scam.prevention }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <QrSection :video-url="videoUrl" />

    <section id="fontes" class="container sources-section py-4 py-lg-5">
      <div class="sources-card">
        <p class="eyebrow">Fontes</p>
        <div class="section-headline">
          <h2 class="section-title">De onde vieram as informações</h2>
          <span class="headline-badge">
            <BookText aria-hidden="true" />
            referências do conteúdo
          </span>
        </div>
        <p class="section-copy">
          Fontes públicas usadas para montar o material. Para saber mais, abra
          os links abaixo.
        </p>

        <div class="row g-3 mt-1">
          <div
            v-for="(source, index) in sources"
            :key="source.title"
            class="col-12 col-lg-6"
          >
            <article
              class="source-item h-100"
              :class="{ 'source-item--alt': index % 2 === 1 }"
            >
              <div class="source-topline">
                <span class="source-icon">
                  <component
                    :is="source.icon === 'book-text' ? BookText : ShieldCheck"
                    aria-hidden="true"
                  />
                </span>
                <h3>{{ source.title }}</h3>
              </div>
              <p>{{ source.description }}</p>
              <a
                :href="source.url"
                target="_blank"
                rel="noreferrer"
                class="source-link"
              >
                {{ source.linkLabel }}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>

  <footer class="container pb-4 text-center">
    <p class="footer-note mb-0">
      Baseado na Cartilha de Prevenção contra Golpes e no Guia Básico de
      Acessibilidade na Comunicação.
    </p>
  </footer>
</template>
