class Form{
    constructor(){
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.next = createButton('NEXT');
        this.next1 = createButton('NEXT');
        this.next1.hide();
        this.state = createButton('STATES');
        this.ut = createButton('UNION TERRITORIES');
    }

    display(){
        this.title1.position(750,100);
        this.title1.html("PROUD TO BE ");
        this.title1.style('color','orange');
        this.title2.position(950,150);
        this.title2.html("AN INDIAN");
        this.title2.style('color','lightGreen');
        this.next.position(900,600);
        this.next.style('background','lightGreen');
        this.next1.position(900,600);
        this.next1.style('background','lightGreen');


        this.next.mousePressed(()=>{
            this.title1.hide();
            this.title2.hide();
            this.next.hide();
            this.next1.show();

            this.o1 = createElement('h3');
            this.o1.position(460,130);
            this.o1.html("India is a great country");
            this.o1.style('fontSize','21px')

            this.o2 = createElement('h3');
            this.o2.position(460,200);
            this.o2.html("It has a Population of about 138 crore and second most populated country");
            this.o2.style('fontSize','21px')


            this.o3 = createElement('h3');
            this.o3.position(460,270);
            this.o3.html("India has an area about 3.287 million km square and seventh largest country ");
            this.o3.style('fontSize','21px')

          
            this.o4 = createElement('h3');
            this.o4.position(460,340);
            this.o4.html("India have 28 states and 9 union territories");
            this.o4.style('fontSize','21px')


            this.o5 = createElement('h3');
            this.o5.position(460,410);
            this.o5.html("India's capital is at New Delhi");
            this.o5.style('fontSize','21px')


            this.o6 = createElement('h3');
            this.o6.position(460,480);
            this.o6.html("There are about 22 different languages in India");
            this.o6.style('fontSize','21px')

            this.next1.mousePressed(()=>{
                this.o1.hide();
                this.o2.hide();
                this.o3.hide();
                this.o4.hide();
                this.o5.hide();
                this.o6.hide();
                this.next1.hide();

                this.state.position(500,400);
                this.state.style('background','orange');

                
                this.ut.position(950,400);
                this.ut.style('background','lightGreen');
                
              this.state.mousePressed(()=>{
                  this.state.hide();
                  this.ut.hide();
                  state = new State();
                  state.display();
              })
            })
            
        })
    }
}