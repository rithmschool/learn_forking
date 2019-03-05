class StudentMultiple {
   int StudentID;
   String StudentName;
	
   int Marks1;
   int Marks2;
   int Marks3;
	
   int Total() { 
      return Marks1+Marks2+Marks3;
   } 
	
   static void main(String[] args) {
      StudentMultiple st = new StudentMultiple();
      st.StudentID = 1;
      st.StudentName = "Joe";
		
      st.Marks1 = 10;
      st.Marks2 = 20;
      st.Marks3 = 30;
		
      println(st.Total()); 
   
      StudentMultiple st1 = new StudentMultiple();
      st.StudentID = 1;
      st.StudentName = "Joe";
		
      st.Marks1 = 10;
      st.Marks2 = 20;
      st.Marks3 = 40;
		
      println(st.Total());  
        
      StudentMultiple st3 = new StudentMultiple();
      st.StudentID = 1;
      st.StudentName = "Joe";
		
      st.Marks1 = 10; 
      st.Marks2 = 20;
      st.Marks3 = 50;
		
      println(st.Total());
   } 
} 
