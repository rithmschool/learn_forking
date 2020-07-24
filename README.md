# learn_how_to_fork
A repository to learn how to fork
A new code
Hello
#include<stdio.h>
void swap(int*a, int *b);
int main ()
{

int first, second;
printf("Enter two numbers: ");
scanf("%d", &first);
printf("Another: ");
scanf("%d", &second);
swap(&first, &second);
printf("Your new numbers are %d and %d\n", first, second);

}
void swap (int* a, int *b)
{
int temp = *a;
*a = *b;
*b = temp;
}
