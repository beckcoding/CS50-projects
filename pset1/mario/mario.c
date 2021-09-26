#include <cs50.h>
#include <stdio.h>
void buildPyramid(int height);

int main(void)
{
    
    int height;       // Initialize the variable height

    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);            // Run the loop to get a value of height between 1 and 8, inclusive, from the user

    
    buildPyramid(height);                // Call the function and pass height to it as a parameter
}


void buildPyramid(int height)        // Declare the function buildPyramid
{
    
    for (int i = 0; i < height; i++)    // Loop to add a new line
    {
       
        for (int k = height - i; k > 1; k--)         // Loop to add spaces
        {
            printf(" ");
        }
      
        for (int j = 0; j <= i; j++)          // Loop to add spaces
        {
            printf("#");
        }
        printf("\n");
    }
}    