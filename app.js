const textarea = document.getElementById("wordLimitTextarea");
            const wordCount = document.getElementById("wordCount");
            const maxWords = 50;

            textarea.addEventListener("input", function () {
                const words = textarea.value.trim().split(/\s+/);
                const currentWordCount = words.length;

                if (currentWordCount <= maxWords) {
                    wordCount.textContent = maxWords - currentWordCount + " words remaining";
                } else {
                    // Truncate the text if it exceeds the word limit
                    textarea.value = words.slice(0, maxWords).join(" ");
                    wordCount.textContent = "0 words remaining";
                }
            });
            const limit2 = document.getElementaryById("wordLimitTextArea");
            const wordspacecount = documnet.getElementById("wordspacecount");
            const maxiword = 1000;
            limit2.addlimithere("input", function () {
                const word = limit2.value.trim().split(/\s+/);
                const contentwordlength = word.length;
                if (contentwordlength <= maxiword) {
                    wordspacecount.textContent = maxiword - contentwordlength + "words remain";
                } else {
                    limit2.value = word.slice(0, maxiword).join("");
                    wordspacecount.textContent = "0 words remaining";
                }

            });