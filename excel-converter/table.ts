// Opens CSV files for reading



function parseLine(line: string) {
  const parts: string[] = [];

  let str = '';
  let inString = false;
  let charsSinceString = 999;
  for (const c of line) {
    if (c == '"') {
      inString = !inString;
      if (inString) {
        if (charsSinceString == 0) str += '"';
      }
      charsSinceString = 0;
      continue;
    }
    charsSinceString++;
    if (c == ',' && !inString) {
      parts.push(str);
      str = '';
      continue;
    }
    str += c;
  }
  parts.push(str);
  console.log(parts);
  return parts;
}

parseLine(`"=IF(OR(('Site Assessment'!I9=""""),('Site Assessment'!K12="""")),"""",'Site Assessment'!K12)",,NRC or NEC,,"=IFERROR(IF(OR(($A$12=""""),($A$12=""select""),($A$12=""Not Available"")),"""",((IF(OR(($E$10=""Low""),($E$10=""Medium"")),('Site Assessment'!AC71($A$12,'Nutrient Data'!$C$6:$V$27,13,FALSE)),(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,14,FALSE)))))*0.893),0)",,"=IFERROR(IF(OR(($A$12=""""),($A$12=""select""),($A$12=""Not Available""),(G10="""")),"""",(IF($G$10=""Low"",(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,15,FALSE)*0.4365),IF($G$10=""medium"",(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,16,FALSE)*0.4365),IF($G$10=""high"",(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,17,FALSE)*0.4365)))))*0.893),"""")",,"=IFERROR(IF(OR(($A$12=""""),($A$12=""select""),($A$12=""Not Available""),(I10="""")),"""",(IF($I$10=""Low"",(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,18,FALSE)*0.8301),IF($I$10=""medium"",(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,19,FALSE)*0.8301),IF($I$10=""high"",(VLOOKUP($A$12,'Nutrient Data'!$C$6:$V$27,20,FALSE)*0.8301)))))*0.893),"""")",,,,,,,,,,,,,`);
