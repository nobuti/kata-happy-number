class Kata
	constructor: (@input) ->
		@base = @input
		@memo = []

	split: ->
		digits = []
		while (@base >= 10)
			digits.push @base%10
			@base=~~(@base/10)

		digits.push @base
		digits.reverse()

		console.log digits
		digits
		

	check: ->
		sum = 0
		digits = @split()
		for n in digits
			sum += n*n
		if (sum in @memo)
			return "#{@input} is not a happy number"
		else
			@base = sum
			@memo.push sum
			return "#{@input} is a happy number" if @base is 1
			@check()



window.Kata = Kata