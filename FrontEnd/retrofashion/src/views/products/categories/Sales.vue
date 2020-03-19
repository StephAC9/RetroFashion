<template>
 <div>
  
    <div class="track-container">
      <span class="range-value min">{{ minValue}} </span> <span class="range-value max">{{ maxValue }}</span>
      <div class="track" ref="_vpcTrack"></div>
      <div class="track-highlight" ref="trackHighlight"></div>
      <button class="track-btn track1" ref="track1"></button>
      <button class="track-btn track2" ref="track2"></button>
    </div>
  
    
 </div> 
      
    
  
</template>
<script>
export default {
    data(){
        return{
      min: 10,
      max: 210,
      minValue: 40,
      maxValue: 150,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      }
          

        }
    },
     methods: {
         moveTrack(track, ev){
      
      let percentInPx = this.getPercentInPx();
      
      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX-trackX;

      let moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if(moveInPct<1 || moveInPct>100) return;
      let value = ( Math.round(moveInPct / this.percentPerStep) * this.step ) + this.min;
      if(track==='track1'){
        if(value >= (this.maxValue - this.step)) return;
        this.minValue = value;
      }

      if(track==='track2'){
        if(value <= (this.minValue + this.step)) return;
        this.maxValue = value;
      }
      
      this.$refs[track].style.left = moveInPct + '%';
      this.setTrackHightlight()
            
    },
     mousedown(ev, track){

      if(this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },
     touchstart(ev, track){
      this.mousedown(ev, track)
    },

    

     }

}



</script>
<style scoped>
.range-value{
    position: absolute;
    top: -2rem;
  }
  .range-value.min{
    left: 0;
  }

  .range-value.max{
    right: 0;
  }
  .track-container{
    width: 100%;
    position: relative;
    cursor: pointer;
    height: 0.5rem;
  }

  .track,
  .track-highlight {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.5rem;
  }

  .track{
    background-color: #ddd;
  }

  .track-highlight{
    background-color: black;
    z-index: 2;
  }

  .track-btn{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2;
    width: 1.5rem;
    height: 1.5rem;
    top: calc(-50% - 0.25rem);
    margin-left: -1rem;
    border: none;
    background-color: black;
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    transition: box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease;
    transition: transform .3s ease-out,box-shadow .3s ease-out,background-color .3s ease,-webkit-transform .3s ease-out;
  }



</style>