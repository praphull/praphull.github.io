<script>
  import Content from './components/Content.svelte';
  const headerSize = 4;
  export let info;
  let show = false;
  import { slide } from 'svelte/transition';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  onMount(() => {
   show = true;
  });
</script>
<style>
.footer-links {
  margin-right: 0.6rem;
}
</style>
{#if show}
<footer class="footer">
  <div class="container has-text-centered" transition:fade="{{delay: 3600, duration: 300}}">
    <p>
      {#each info.contactDetails as contact}
      <span class="footer-links has-text-info">
        {#if contact.url}
        <a class="has-text-info" href="{contact.url}" target="_blank" title="{contact.name}">
          <i class="icon icon-themed fa-lg {contact.icon}" title="{contact.name}"></i> {contact.id}
        </a>
        {:else}
        <i class="icon icon-themed fa-lg {contact.icon}" title="{contact.name}"></i> {contact.id}
        {/if}
      </span>
      {/each}
    </p>
    <br>
    <p>
      Hosted on <strong><a href="https://github.com/praphull/praphull.github.io" target="_blank">Github pages</a></strong>.
      Built using <a href="https://bulma.io" target="_blank">Bulma</a> & <a href="https://svelte.dev/" target="_blank">Svelte</a>,
      bundled using <a href="https://webpack.js.org/" target="_blank">webpack</a>. Icons from
      <a href="https://icomoon.io/" target="_blank">IcoMoon</a>. Page layout inspired from toptal.<br>
      The <a href="https://github.com/praphull/praphull.github.io" target="_blank">source code</a> is licensed under
      <a href="https://opensource.org/licenses/Apache-2.0" target="_blank">Apache License, Version 2.0</a> and everyone is free to
      modify & use it for their pages.<br>
      Content copyright &copy; Praphull Purohit.
    </p>
    <br>
    <p>
      <a href="https://projecteuler.net" target="_blank" title="Project Euler Status">
        <img src="https://projecteuler.net/profile/praphull.png" alt="Project Euler Status">
      </a>
    </p>
  </div>
</footer>
{/if}