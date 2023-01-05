
function Prep() {
const Prep=[
 "   1. Liam 	",
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
    "   15. Liam 	",
 "16. Noah 	",
 "17. Oliver 	",
"18. Elijah 	",
"19. William", "20. James ",	
"21. Benjamin","22. Lucas", 	
 "23. Henry" ,	
 "24.Alexander", 	
"25. Mason ", "26. Michael ",	
 "27. Ethan ",	
 "28. Daniel"
   
]
    
    return (
        <div id="">
                    {       
                       Prep.map ((ref)=>
                            <div>
                                <h3>
                                {
                                        ref
                                }
                                </h3>
                               
                            </div>

                        )
                    }

        </div>



      );
}

export default Prep;