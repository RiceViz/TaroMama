import Phaser from 'phaser';

export function CheckPositions(name_order: Phaser.GameObjects.GameObject[]){
    const name_order_copy = name_order;
    console.log("Before sort - name_order");
    console.log(name_order);

    //Sort elements by their y value.
    const sortedByHeight:Phaser.GameObjects.GameObject[] = name_order_copy.slice(0).sort((n1,n2) =>{
        if(n1.body.position.y > n2.body.position.y){
            return(1);
        }
        if(n1.body.position.y < n2.body.position.y){
            return(-1);
        }
        return(0);
    }
    )

    //Starting comparison
    console.log("After sort - name_order");
    console.log(name_order);
    console.log("After sort -- sortedByHeight");
    console.log(sortedByHeight);

    for(let i = 0; i < name_order.length; i += 1){
        if(name_order[i].name !== sortedByHeight[i].name){
            console.log('Printing i value');
            console.log(name_order.indexOf(sortedByHeight[i]) - i);
            return(String(`The instruction ${name_order[i]?.name}\nis out of order.`));
        }

    }
    return (String('All instructions are in\nthe correct location'));
}