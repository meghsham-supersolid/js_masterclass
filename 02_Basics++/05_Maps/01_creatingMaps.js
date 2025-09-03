/*
    - Map is a data structure that stores key-value pairs, where each key is unique. 
    - It is similar to an object but has some advantages:
        * Inserts keys in the order they were added.
        * Allows keys of any type, not just strings and symbols.
      * Creating an empty map
            const mapName = new Map ();

            Example : 
                const myMap = new Map ();
                console.log(myMap);

            Output :
                Map(0) {}
            
        * Creating an map with pre-added values
            const mapName = new Map ();
            
            Example : 
                const myMap = new Map([
                ["student_1", "Raj"],
                ["student_2", "Rohan"],
                ["student_3", "Rahul"],
                ["student_4", "Rajeev"],
                ["student_5", "Ranjeet"],
                ]);

                console.log(myMap);

            Output : 
                Map(5) {
                'student_1' => 'Raj',
                'student_2' => 'Rohan',
                'student_3' => 'Rahul',
                'student_4' => 'Rajeev',
                'student_5' => 'Ranjeet'
}
*/
