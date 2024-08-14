// should return true
//  [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

//   // should return false
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

//  // should return true
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

//  // should return false
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );

Array.prototype.sameStructureAs = function (other) {
	if (!Array.isArray(other) && !Array.isArray(this)) return false
	if (this.length !== other.length) return false

	// console.log('other', other, '---', 'this', this)

	for (let i = 0; i < this.length; i++) {
		if (Array.isArray(this[i]) && Array.isArray(other[i])) {
			if (!this[i].sameStructureAs(other[i])) {
				return false
			}
		} else if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
			return false
		}
	}

	return true
}

console.log('ignore ', [1, [1, 1]].sameStructureAs([2, [2, 2]]))
