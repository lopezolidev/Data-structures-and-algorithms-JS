class HashTable {
    constructor(size){
        this.data = new Array(size);
        //setting the size of the array as our data object
    }
    hashGenerator(key){
        let hash = 0;
        //initiate hash as 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            //random number generator, will be our hash
        }
        return hash;
    }
    set(key, value){
        const address = this.hashGenerator(key);
        //storing our address (hash) in a variable
        if(!this.data[address]){
            this.data[address] = [];
            //if this address pointed by our hash doesn't exists yet, we'll generate a bucket for it
        }
        this.data[address].push([key, value]);
        //we'll push an array of key-value pairs in this bucket, pointed by our address → hash
        //also this + the conditional is our way to deal with collisions, in such case, a new array will be pushed inside the same bucket without overwritting
        return this.data;
    }
    //implementing get() method
    get(key){
        const address = this.hashGenerator(key);
        //obtain the desired hash from the key

        const bucket = this.data[address];
        //the array in the position of the hash

        if(bucket){
        //if the bucket doesn't exists returns undefined
            for (let i = 0; i < bucket.length; i++) {
                //resorting the bucket to match the first value [0] stored in the [i] position of such list
                if(bucket[i][0] === key){
                    return bucket[i][1];
                    //returning the desired value from which we pass on the key
                }
                
            }
        }
        return undefined;
        //if there's no bucket in a given position
    }

    //implementing delete method
    delete(key){
        const address = this.hashGenerator(key);
        //obtain hash linked to this key

        const bucket = this.data[address];
        //bucket for list deletion

        if(bucket){
            //same validation for get()
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i][0] === key){
                    const item = bucket[i];
                    //storing in item the to-be-deleted sub-array
                    delete bucket[i];
                    //deleting that sub-array
                    bucket.splice(i, 1); //← didn't implement this line in the playground
                    //must delete the empty space to not store it anymore
                    return item;
                    //item to store in another variable when this method is used
                }
            }
        }
        return undefined;
    }
    //Obtain all keys method implementation

    getAllKeys(){
        const allKeys = [];
        //start an empty array to store keys

        for(let i = 0; i < this.data.length; i++){
            //loop to resort every bucket in the hash table

            if(this.data[i]){
                //if this bucket is not empty do the following 

                for(let j = 0; j < this.data[i].length; j++){
                    //resort the bucket looking for all the keys in every sub-array

                    let item = this.data[i][j][0];
                    //store item as the key of every sub-array inside the bucket

                    allKeys.push(item);
                    //push that item (key) into the allKeys array
                }
            }
        }
        return allKeys;
    }
}

const myHashTable = new HashTable(50);
//instancing our new hash table with a size of 50 buckets

console.log(myHashTable.set('Xavier', 1962));
//[ <22 empty items>, [ [ 'Xavier', 1962 ] ], <27 empty items> ]

console.log(myHashTable.set('Jacqueline', 1967));
// [
//     <22 empty items>,
//     [ [ 'Xavier', 1962 ] ],
//     <6 empty items>,
//     [ [ 'Jacqueline', 1967 ] ],
//     <20 empty items>
//   ]

console.log(myHashTable.set('Leo', 1973));
// [
//     <22 empty items>,
//     [ [ 'Xavier', 1962 ] ],
//     [ [ 'Leo', 1973 ] ],
//     <5 empty items>,
//     [ [ 'Jacqueline', 1967 ] ],
//     <20 empty items>
//   ]


console.log(myHashTable.get('Xavier'));
//1962

console.log(myHashTable.get('Jacqueline'))
//1967

console.log(myHashTable.get('Leo'))
//1973

console.log(myHashTable.delete('Xavier'))
// [ 'Xavier', 1962 ]

console.log(myHashTable.data)
// [
//     <22 empty items>,
//     [ <1 empty item> ],
//     [ [ 'Leo', 1973 ] ],
//     <5 empty items>,
//     [ [ 'Jacqueline', 1967 ] ],
//     <20 empty items>
//   ]

console.log(myHashTable.getAllKeys());
//[ 'Leo', 'Jacqueline' ]