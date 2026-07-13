<script setup>
import { Languages, PlayCircle, QrCode, Smartphone } from "@lucide/vue";

defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section id="libras" class="container mt-4 mb-5">
    <div class="glass-card p-4 p-lg-5 qr-shell">
      <p class="eyebrow">Material acessível em Libras</p>
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <div class="section-headline">
            <h2 class="section-title mb-0">Acesse o vídeo em Libras</h2>
            <span class="headline-badge">
              <QrCode aria-hidden="true" />
              acesso rápido
            </span>
          </div>

          <p class="section-copy mt-3">
            Escaneie o QR Code ou abra o link para assistir ao conteúdo em
            Libras.
          </p>

          <div class="qr-feature-strip" aria-hidden="true">
            <span><Languages aria-hidden="true" />Libras</span>
            <span><Smartphone aria-hidden="true" />QR Code</span>
            <span><PlayCircle aria-hidden="true" />vídeo</span>
          </div>

          <a
            class="btn btn-accent btn-lg rounded-pill px-4"
            :href="videoUrl"
            target="_blank"
            rel="noreferrer"
          >
            Abrir link do vídeo
          </a>

          <p class="small-note mt-3 mb-0">
            Link atual:
            <span>{{ videoUrl }}</span>
          </p>
        </div>

        <div class="col-lg-5">
          <figure class="content-card qr-card text-center mb-0 qr-visual">
            <img
              class="img-fluid mx-auto qr-visual__image"
              src="/assets/qrcode.png"
              alt="QR code em imagem PNG para acessar o vídeo em Libras."
              loading="lazy"
              decoding="async"
            />
            <figcaption class="small-note mt-3">
              QR code em PNG para o acesso ao vídeo em Libras do grupo.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
