const CKEConfig = () => ({
  presets: {
    default: {
      styles: `
                --ck-focus-ring:3px dashed #5CB176;
                .ck.ck-editor__main > .ck-editor__editable {
    background: inherit;
    }
                .ck.ck-content.ck-editor__editable {
                  &.ck-focused:not(.ck-editor__nested-editable) {
                    border: var(--ck-focus-ring) !important;
                  }
                }
                .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred{
                  min-height: 200px;
                  max-height: 400px;
                }
                .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused{
                  min-height: 400px;
                  max-height: 1000px;
                }
            `,
    },
  },
});
