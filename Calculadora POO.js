class Calculator {
    constructor() {
      this.area = $("#resultado");
      this.keys = $(".key");
      this.clear = $(".clear");
      this.equal = $(".equal");
      this.operation = $(".operation-btn");
      this.delete = $(".delete");
      this.compute();
    }

    //Mostrar resultado en pantalla
    compute() {
    //Al hacer click en cualquier tecla
      this.keys.click((el) => {
        //Obtener el valor de la tecla
        let valor = $(el.target).val();
        //Mostrar el valor en pantalla
        this.area.val(this.area.val() + valor);
      });

    //Al hacer click en el botón de borrar
      this.clear.click(() => {
        this.area.val("");
      });
  
      this.equal.click(() => {
        this.area.val(eval(this.area.val()));
      });
  
      this.operation.click((el) => {
        let valor = $(el.target).val();
  
        switch (valor) {
          case "logx":
                this.area.val(Math.log(this.area.val()));
            break;
  
          case "exponential":
                this.area.val(Math.exp(this.area.val()));
            break;
  
          case "power2":
                this.area.val(Math.pow(this.area.val(), 2));
            break;
  
          case "power3":
            this.area.val(Math.pow(this.area.val(), 3));
            break;
  
          case "sqrt":
                this.area.val(Math.sqrt(this.area.val()));
            break;
  
          case "fact":
                let x = this.area.val();
                let y = 1;
                for (var i = 1; i <= x; i++) {
                y = y * i;
                }
                this.area.val(y);
            break;
  
          case "sin":
                this.area.val(Math.sin(this.area.val()));
            break;
  
          case "asin":
            this.area.val(Math.asin(this.area.val()));
            break;
  
          case "cos":
                this.area.val(Math.cos(this.area.val()));
            break;
  
          case "acos":
                this.area.val(Math.acos(this.area.val()));
            break;
  
          case "tan":
                this.area.val(Math.tan(this.area.val()))
            break;
  
          case "atan":
                this.area.val(Math.atan(this.area.val()));
            break;
        }
      });
  
      //Al hacer click en el botón de borrar
      this.delete.click(() => {
        var deletion = this.area.val().length - 1;
        var afterDeletion = this.area.val().substring(0, deletion);
        this.area.val(afterDeletion);
      });
    }
  }
  
  //Instanciar la clase
  new Calculator();
  