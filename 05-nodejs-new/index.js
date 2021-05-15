// Nullish Coalescing
valor1 = "abc"
valor2 = "abd"
valorFinal = valor1 || valor2
// 'abc'
valor1 = false
valorFinal = valor1 || valor2
// 'abd'
valorFinal = (0 || false || "") || (null || undefined)
// 'abd'
valorFinal =  false ?? true
// false
(null || undefined) ?? true
true

db = {}
db?.user?.preferences?

db = { user: {}}
db?.user?.preferences?.["username"].length

db = { user: { preferences: () => ({ result: 1 })}}
db?.user?.preferences?.().result
