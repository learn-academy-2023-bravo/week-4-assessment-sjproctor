# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def is_even_odd num
  if num.even?
    "#{num} is even"
  else
    "#{num} is odd"
  end
end

p is_even_odd(reposts1)
p is_even_odd(reposts2)
p is_even_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
  string.delete('aeiouAEIOU')
end

p remove_vowels(beatles_album1)
p remove_vowels(beatles_album2)
p remove_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(string)
  if string.downcase == string.downcase.reverse
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"
  end
end

p palindrome(palindrome_tester1)
p palindrome(palindrome_tester2)
p palindrome(palindrome_tester3)