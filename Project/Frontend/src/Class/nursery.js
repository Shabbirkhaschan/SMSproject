
import "./nursery.css";
function Nursery() {
const Nursery=[
 " 1. Liam 	",
"2. Noah 	",
"3. Oliver 	",
"4. Elijah 	",
"5. William","6. James ",	
"7. Benjamin",
"8. Lucas","9. Henry" ,	
"1.Alexander", 	
"11. Mason ",	
"12. Michael ",	
"13. Ethan ",	
"14. Daniel",
"15. Liam ",
 "16. Noah ",
 "17. Oliver ",
"18. Elijah ",
"19. William", "20. James ",	
"21. Benjamin","22. Lucas", 	
 "23. Henry" ,	
 "24.Alexander", 	
"25. Mason ", "26. Michael ",	
 "27. Ethan ",	
 "28. Daniel"
   
]
    
    return (
        <div id="main">
                    {       
                        Nursery.map((ref7)=>
                            <div>
                                <h3>
                                {
                                        ref7
                                }
                                </h3>
                               
                            </div>

                        )
                    }

        </div>



      );
}

export default Nursery;