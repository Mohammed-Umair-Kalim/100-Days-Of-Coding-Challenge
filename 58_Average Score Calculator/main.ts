// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and
// find their average. ?
// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score.
//  Handy for seeing how well you did overall!

// Answer 58:
function avg_score(...scores:number[]): number {
        let avg_total = scores.reduce((sum,score) => sum + score , 0);
        return avg_total  / scores.length
}
console.log(avg_score(75,56,45,88,95))
