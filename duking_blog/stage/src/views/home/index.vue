<template>
	<div class="home_page">
    <header>
      <Ulogo></Ulogo>
      <Unav></Unav>
    </header>

    <main>
      <div class="container">
        <div class="col-xs-8">
          <Uposts></Uposts>
        </div>
        <div class="col-xs-4">

        </div>
      </div>
    </main>
    
    <footer>
      <Ufooter></Ufooter>
    </footer>   

  </div>
</template>

<script type="text/javascript">
import Ulogo from './ulogo.vue'
import Unav from '../../components/unav.vue'
import Uposts from '../../components/uposts.vue'
import Ufooter from '../../components/ufooter.vue'

export default {

  components: {
    Ulogo,
    Unav,
    Uposts,
    Ufooter,
  },
}
</script>
