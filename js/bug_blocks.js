  Blockly.Blocks['bug_move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avance")
        .appendField(new Blockly.FieldTextInput("1"), "steps")
        .appendField("case(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bug_move_forward'] = function(block) {
  var text_steps = block.getFieldValue('steps');
  // TODO: Assemble JavaScript into code variable.
  var code = 'bug.forward(' + text_steps + ');';
  return code;
};

Blockly.Blocks['bug_move_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner")
        .appendField(new Blockly.FieldDropdown([["gauche", "L"], ["droite", "R"]]), "orientation");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bug_move_turn'] = function(block) {
  var dropdown_orientation = block.getFieldValue('orientation');
  // TODO: Assemble JavaScript into code variable.
  var code = 'bug.turn("' + dropdown_orientation + '");';

  return code;
};
Blockly.Blocks['bug_controls_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Répéter")
        .appendField(new Blockly.FieldTextInput("2"), "count")
        .appendField("fois");
    this.appendStatementInput("innerCode");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(135);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['bug_controls_loop'] = function(block) {
  var text_count = block.getFieldValue('count');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'innerCode');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(var i=0;i<' +text_count+';++i) {' + statements_name + '}';
  return code;
};

Blockly.Blocks['bug_collect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ramasser")
        .appendField(new Blockly.FieldImage("images/wood.png", 15, 15, "*"))
        .appendField(new Blockly.FieldDropdown([["bois", "W"], ["rocher", "R"], ["or", "G"], ["peinture", "P"]]), "NAME");
    this.setColour(60);
    this.setTooltip('');
        this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['bug_collect'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'bug.collect("' + dropdown_name + '");';
  return code;
};

