/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xpathAsc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,6],$V3=[1,7],$V4=[1,8],$V5=[5,6],$V6=[1,12],$V7=[5,6,14],$V8=[2,43],$V9=[1,14],$Va=[1,18],$Vb=[1,21],$Vc=[1,22],$Vd=[1,20],$Ve=[1,23],$Vf=[1,25],$Vg=[1,26],$Vh=[1,27],$Vi=[1,28],$Vj=[1,29],$Vk=[1,30],$Vl=[1,31],$Vm=[1,32],$Vn=[1,33],$Vo=[1,34],$Vp=[1,35],$Vq=[1,36],$Vr=[8,16,17,19,20,26,29,30,31,32,33,34,35,36,37,38,39],$Vs=[2,13],$Vt=[1,48],$Vu=[1,47],$Vv=[1,51],$Vw=[1,45],$Vx=[1,46],$Vy=[1,49],$Vz=[1,50],$VA=[1,59],$VB=[1,61],$VC=[1,60],$VD=[1,81],$VE=[1,90],$VF=[1,79],$VG=[1,80],$VH=[1,82],$VI=[1,83],$VJ=[1,84],$VK=[1,85],$VL=[1,86],$VM=[1,87],$VN=[1,88],$VO=[1,91],$VP=[16,24,43,44,45,46,47,48,49,50,51,52,53,54],$VQ=[5,6,14,16,24,43,44,45,46,47,48,49,50,51,52,53,54],$VR=[1,124],$VS=[1,125],$VT=[1,126],$VU=[1,127],$VV=[16,24,43,46,47,48,49,50,51,52,53,54],$VW=[24,43,47,48,49,50,51,52,53,54],$VX=[24,43,51,52,53,54];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIOPURO":3,"INICIO":4,"EOF":5,"tk_barra":6,"INICIALES":7,"tk_punto":8,"DIAGONALES":9,"DERIVADOSLIMITADO":10,"DERIVACIONDIAGONAL":11,"identificador":12,"PREDICATE":13,"tk_diagonal":14,"DERIVACIONPATHS":15,"tk_asterisco":16,"tk_node":17,"DERIVADOS":18,"tk_identificador":19,"tk_arroba":20,"ATRIBUTO":21,"COMPLEMENTOATRIBUTO":22,"AXES":23,"tk_igual":24,"tk_stringTexto":25,"tk_child":26,"tk_dosPuntos":27,"NODETEST":28,"tk_descendant":29,"tk_descendatOr":30,"tk_ancestor":31,"tk_ancestorOr":32,"tk_attribute":33,"tk_following":34,"tk_followingSi":35,"tk_parent":36,"tk_preceding":37,"tk_precedingSi":38,"tk_self":39,"tk_text":40,"tk_llaveA":41,"EXPRESION":42,"tk_llaveC":43,"tk_mas":44,"tk_menos":45,"tk_div":46,"tk_menor":47,"tk_mayor":48,"tk_menorIgual":49,"tk_mayorIgual":50,"tk_or":51,"tk_and":52,"tk_mod":53,"tk_distinto":54,"tk_entero":55,"tk_decimal":56,"tk_position":57,"tk_last":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"tk_barra",8:"tk_punto",12:"identificador",14:"tk_diagonal",16:"tk_asterisco",17:"tk_node",19:"tk_identificador",20:"tk_arroba",24:"tk_igual",25:"tk_stringTexto",26:"tk_child",27:"tk_dosPuntos",29:"tk_descendant",30:"tk_descendatOr",31:"tk_ancestor",32:"tk_ancestorOr",33:"tk_attribute",34:"tk_following",35:"tk_followingSi",36:"tk_parent",37:"tk_preceding",38:"tk_precedingSi",39:"tk_self",40:"tk_text",41:"tk_llaveA",43:"tk_llaveC",44:"tk_mas",45:"tk_menos",46:"tk_div",47:"tk_menor",48:"tk_mayor",49:"tk_menorIgual",50:"tk_mayorIgual",51:"tk_or",52:"tk_and",53:"tk_mod",54:"tk_distinto",55:"tk_entero",56:"tk_decimal",57:"tk_position",58:"tk_last"},
productions_: [0,[3,2],[4,3],[4,1],[7,4],[7,3],[7,2],[7,3],[7,3],[7,3],[9,1],[9,2],[11,3],[11,0],[15,3],[15,1],[10,2],[10,2],[10,2],[10,3],[10,1],[18,1],[18,2],[18,1],[22,2],[22,0],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[28,2],[28,2],[28,2],[28,1],[13,3],[13,0],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,1],[42,1],[42,2],[42,1],[42,1],[42,1],[42,1],[21,1],[21,1],[21,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,7:3,8:$V0,12:$V1,14:$V2,16:$V3,17:$V4},{1:[3]},{5:[1,9],6:[1,10]},o($V5,[2,3]),{9:11,14:$V6},o($V7,$V8,{13:13,41:$V9}),{8:$Va,10:19,14:[1,16],15:15,16:$Vb,17:$Vc,18:17,19:$Vd,20:$Ve,23:24,26:$Vf,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq},o($V7,$V8,{13:37,41:$V9}),o($V7,$V8,{13:38,41:$V9}),{1:[2,1]},{4:39,7:3,8:$V0,12:$V1,14:$V2,16:$V3,17:$V4},{10:40,16:$Vb,17:$Vc,19:$Vd,20:$Ve,23:24,26:$Vf,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq},o($Vr,[2,10],{14:[1,41]}),o($V5,$Vs,{11:42,9:43,14:$V6}),{19:$Vt,20:$Vu,25:$Vv,42:44,55:$Vw,56:$Vx,57:$Vy,58:$Vz},o($V5,[2,6]),{8:$Va,10:19,15:52,16:$Vb,17:$Vc,18:17,19:$Vd,20:$Ve,23:24,26:$Vf,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq},o($V5,[2,15],{9:53,14:$V6}),o($V7,[2,21],{8:[1,54]}),o($V7,[2,23]),o($V7,$V8,{13:55,41:$V9}),o($V7,$V8,{13:56,41:$V9}),o($V7,$V8,{13:57,41:$V9}),{16:$VA,17:$VB,19:$VC,21:58},o($V7,[2,20]),{27:[1,62]},{27:[1,63]},{27:[1,64]},{27:[1,65]},{27:[1,66]},{27:[1,67]},{27:[1,68]},{27:[1,69]},{27:[1,70]},{27:[1,71]},{27:[1,72]},{27:[1,73]},o($V5,$Vs,{9:43,11:74,14:$V6}),o($V5,$Vs,{9:43,11:75,14:$V6}),o($V5,[2,2]),o($V5,$Vs,{9:43,11:76,14:$V6}),o($Vr,[2,11]),o($V5,[2,5]),{8:$Va,10:19,16:$Vb,17:$Vc,18:77,19:$Vd,20:$Ve,23:24,26:$Vf,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq},{16:$VD,24:$VE,43:[1,78],44:$VF,45:$VG,46:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,53:[1,89],54:$VO},o($VP,[2,57]),o($VP,[2,58]),{16:$VA,17:$VB,19:$VC,21:92},o($VP,[2,60]),o($VP,[2,61]),o($VP,[2,62]),o($VP,[2,63]),o($V5,[2,7]),{8:$Va,10:19,15:93,16:$Vb,17:$Vc,18:17,19:$Vd,20:$Ve,23:24,26:$Vf,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq},o($V7,[2,22]),o($V7,[2,16]),o($V7,[2,17]),o($V7,[2,18]),o($V7,[2,25],{22:94,24:[1,95]}),o($VQ,[2,64]),o($VQ,[2,65]),o($VQ,[2,66]),{27:[1,96]},{27:[1,97]},{27:[1,98]},{27:[1,99]},{27:[1,100]},{27:[1,101]},{27:[1,102]},{27:[1,103]},{27:[1,104]},{27:[1,105]},{27:[1,106]},{27:[1,107]},o($V5,[2,8]),o($V5,[2,9]),o($V5,[2,4]),o($V5,$Vs,{9:43,11:108,14:$V6}),o($V7,[2,42]),{19:$Vt,20:$Vu,25:$Vv,42:109,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:110,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:111,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:112,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:113,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:114,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:115,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:116,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:117,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:118,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:119,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:120,55:$Vw,56:$Vx,57:$Vy,58:$Vz},{19:$Vt,20:$Vu,25:$Vv,42:121,55:$Vw,56:$Vx,57:$Vy,58:$Vz},o($VP,[2,59]),o($V5,[2,14]),o($V7,[2,19]),{25:[1,122]},{16:$VR,17:$VS,19:$VT,28:123,40:$VU},{16:$VR,17:$VS,19:$VT,28:128,40:$VU},{16:$VR,17:$VS,19:$VT,28:129,40:$VU},{16:$VR,17:$VS,19:$VT,28:130,40:$VU},{16:$VR,17:$VS,19:$VT,28:131,40:$VU},{16:$VR,17:$VS,19:$VT,28:132,40:$VU},{16:$VR,17:$VS,19:$VT,28:133,40:$VU},{16:$VR,17:$VS,19:$VT,28:134,40:$VU},{16:$VR,17:$VS,19:$VT,28:135,40:$VU},{16:$VR,17:$VS,19:$VT,28:136,40:$VU},{16:$VR,17:$VS,19:$VT,28:137,40:$VU},{16:$VR,17:$VS,19:$VT,28:138,40:$VU},o($V5,[2,12]),o($VP,[2,44]),o($VP,[2,45]),o($VV,[2,46],{44:$VF,45:$VG}),o($VV,[2,47],{44:$VF,45:$VG}),o($VW,[2,48],{16:$VD,44:$VF,45:$VG,46:$VH}),o($VW,[2,49],{16:$VD,44:$VF,45:$VG,46:$VH}),o($VW,[2,50],{16:$VD,44:$VF,45:$VG,46:$VH}),o($VW,[2,51],{16:$VD,44:$VF,45:$VG,46:$VH}),o([43,51,53],[2,52],{16:$VD,24:$VE,44:$VF,45:$VG,46:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,52:$VN,54:$VO}),o([43,51,52,53],[2,53],{16:$VD,24:$VE,44:$VF,45:$VG,46:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,54:$VO}),o([43,53],[2,54],{16:$VD,24:$VE,44:$VF,45:$VG,46:$VH,47:$VI,48:$VJ,49:$VK,50:$VL,51:$VM,52:$VN,54:$VO}),o($VX,[2,55],{16:$VD,44:$VF,45:$VG,46:$VH,47:$VI,48:$VJ,49:$VK,50:$VL}),o($VX,[2,56],{16:$VD,44:$VF,45:$VG,46:$VH,47:$VI,48:$VJ,49:$VK,50:$VL}),o($V7,[2,24]),o($V7,[2,26]),o($V7,$V8,{13:139,41:$V9}),o($V7,$V8,{13:140,41:$V9}),o($V7,$V8,{13:141,41:$V9}),o($V7,[2,41]),o($V7,[2,27]),o($V7,[2,28]),o($V7,[2,29]),o($V7,[2,30]),o($V7,[2,31]),o($V7,[2,32]),o($V7,[2,33]),o($V7,[2,34]),o($V7,[2,35]),o($V7,[2,36]),o($V7,[2,37]),o($V7,[2,38]),o($V7,[2,39]),o($V7,[2,40])],
defaultActions: {9:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "tk_decimal";
break;
case 1:return "tk_entero";
break;
case 2:return "tk_node";
break;
case 3:return "tk_child";
break;
case 4:return "tk_descendant";
break;
case 5:return "tk_descendatOr"
break;
case 6:return "tk_ancestor";
break;
case 7:return "tk_ancestorOr";
break;
case 8:return "tk_attribute";
break;
case 9:return "tk_following";
break;
case 10:return "tk_followingSi"
break;
case 11:return "tk_parent"
break;
case 12:return "tk_preceding"
break;
case 13:return "tk_precedingSi"
break;
case 14:return "tk_self"
break;
case 15:return "tk_text"
break;
case 16:return "tk_position"
break;
case 17:return "tk_last"
break;
case 18:return "tk_div"
break;
case 19:return "tk_and"
break;
case 20:return "tk_or"
break;
case 21:return "tk_mod"
break;
case 22:return "tk_barra"
break;
case 23:return "tk_punto"
break;
case 24:return "tk_diagonal"
break;
case 25:return "tk_asterisco"
break;
case 26:return "tk_dosPuntos"
break;
case 27:return "tk_mas"
break;
case 28:return "tk_menos"
break;
case 29:return "tk_menorIgual"
break;
case 30:return "tk_mayorIgual"
break;
case 31:return "tk_menor"
break;
case 32:return "tk_mayor"
break;
case 33:return "tk_distinto"
break;
case 34:return "tk_igual"
break;
case 35:return "tk_llaveA"
break;
case 36:return "tk_llaveC"
break;
case 37:return "tk_arroba"
break;
case 38:return "tk_stringTexto";
break;
case 39:return "tk_stringTexto";
break;
case 40:return "tk_stringTexto";
break;
case 41:return "tk_stringTexto";
break;
case 42:return "tk_identificador";
break;
case 43:return "EOF";
break;
case 44:
break;
case 45:
break;
}
},
rules: [/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:node\(\))/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:descendant-or-self\b)/,/^(?:ancestor\b)/,/^(?:ancestor-or-self\b)/,/^(?:attribute\b)/,/^(?:following\b)/,/^(?:following-sibling\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:preceding-sibling\b)/,/^(?:self\b)/,/^(?:text\(\))/,/^(?:position\(\))/,/^(?:last\(\))/,/^(?:div\b)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:mod\b)/,/^(?:\|)/,/^(?:\.)/,/^(?:\/)/,/^(?:\*)/,/^(?::)/,/^(?:\+)/,/^(?:-)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?:=)/,/^(?:\[)/,/^(?:\])/,/^(?:@)/,/^(?:"[^\"]*")/,/^(?:“[^\“]*“)/,/^(?:'[^\']*')/,/^(?:‘[^\‘]*‘)/,/^(?:[a-zA-Z]([a-zA-Z0-9_])*)/,/^(?:$)/,/^(?:[ \t\r\n\f])/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = xpathAsc;
exports.Parser = xpathAsc.Parser;
exports.parse = function () { return xpathAsc.parse.apply(xpathAsc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}