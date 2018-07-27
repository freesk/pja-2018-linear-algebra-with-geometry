const p1 = 9;
const p2 = 14;
const q1 = 3;
const q2 = 6;

const max = 100;

const l = [];
const r = [];

const output = [];

for(let i = 0; i < max; i++)
	l.push({ "a": i, "q": p1 * i + q1 });

for(let i = 0; i < max; i++)
	r.push({ "b": i, "q": p2 * i + q2 });

for(let i = 0; i < max; i++) {
	for(let j = 0; j < max; j++) {
		if(l[i].q === r[j].q)
			output.push({ a: l[i].a, b: r[j].b, q: l[i].q });
	}
}
console.log(output);
