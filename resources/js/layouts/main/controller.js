function setup(){
    if(window.innerWidth>this.mobileBreakPoint){
      this.menuStatus = this.menuStatusMemory;
      this.$store.commit('MENU_WIDTH_ADJ',this.menuWidth);
      this.$store.commit('TOGGLE_MENU',this.menuStatusMemory);
      this.$store.commit('HEADER_WIDTH',(window.innerWidth-this.$store.state.menuWidthAdj));
    }else{
      this.menuStatus = false;
      this.$store.commit('MENU_WIDTH_ADJ',0);
      this.$store.commit('TOGGLE_MENU',false);
      this.$store.commit('HEADER_WIDTH',window.innerWidth);
    }
  }
  function resizeControll(){
    this.$store.commit('HEADER_WIDTH',(window.innerWidth-this.$store.state.menuWidthAdj));
    if(window.innerWidth>this.mobileBreakPoint){
      if(this.menuStatusMemory == true){
        this.slideMenu('show')          
      }
    }else{      
      this.slideMenu('hide');
      if(this.menuFullScreen){
        this.floatMenu('hide');
      }
    }
  }
  function slideMenu(act){
    if(act == 'show'){
      if(this.menuStatus == false){
        this.$store.commit('TOGGLE_MENU',true);
        this.menuStatus = true;
        let timer = setInterval(function() {
            var menuWidth = this.$store.state.menuWidthAdj + 5;
            if(menuWidth > this.menuWidth){
                this.$store.commit('MENU_WIDTH_ADJ',this.menuWidth);
                clearInterval(timer);
            }else{
              this.$store.commit('MENU_WIDTH_ADJ',menuWidth);
            }
        }.bind(this), 5);
      }
    }
    if(act == 'hide'){
      if(this.menuStatus == true){
        let timer = setInterval(function() {
            var menuWidth = this.$store.state.menuWidthAdj - 5;
            if (menuWidth < 0){
              this.$store.commit('MENU_WIDTH_ADJ',0);
                this.menuStatus = false;
                this.$store.commit('TOGGLE_MENU',false);
                clearInterval(timer);
            }else{
              this.$store.commit('MENU_WIDTH_ADJ',menuWidth);
            }
        }.bind(this), 5);
      }
    }
  }
  function floatMenu(act){
    if(act == 'show'){
      this.menuStatus = true;
      this.menuFullScreen = true;
    }
    if(act == 'hide'){
      this.menuStatus = false;
      this.menuFullScreen = false;
    }
  }
  function toggleMenu(status){
    if(window.innerWidth > this.mobileBreakPoint){
      if(status == true){ this.slideMenu('show'); this.menuStatusMemory=true; }else{this.slideMenu('hide');this.menuStatusMemory=false;}
    }else{
      status == true ? this.floatMenu('show') : this.floatMenu('hide')
    }
  }

  export {setup, resizeControll, slideMenu, floatMenu, toggleMenu}