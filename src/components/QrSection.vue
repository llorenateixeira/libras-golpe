<script setup>
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
              <i class="bi bi-qr-code-scan" aria-hidden="true"></i>
              acesso rápido
            </span>
          </div>

          <p class="section-copy mt-3">
            Escaneie o QR Code ou abra o link para assistir ao conteúdo em Libras.
          </p>

          <div class="qr-feature-strip" aria-hidden="true">
            <span><i class="bi bi-hands"></i>Libras</span>
            <span><i class="bi bi-phone"></i>QR Code</span>
            <span><i class="bi bi-play-circle"></i>vídeo</span>
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
          <figure class="content-card qr-card text-center mb-0">
            <img
              class="img-fluid mx-auto"
              src="/assets/qr-video-libras.svg"
              alt="QR Code de exemplo para o vídeo em Libras do trabalho."
            />
            <figcaption class="small-note mt-3">
              Troque pelo link final do vídeo em Libras do grupo.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
