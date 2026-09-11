/* @ds-bundle: {"format":4,"namespace":"EOPADesignSystem_a7a8e3","components":[{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/forms/Button.jsx":"395b16b4067d","components/forms/Checkbox.jsx":"1debefb9b3bf","components/forms/Input.jsx":"b9eeff3c7037"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EOPADesignSystem_a7a8e3 = window.EOPADesignSystem_a7a8e3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button'
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: size === 'sm' ? '13px' : '14px',
    borderRadius: 'var(--radius-sm)',
    padding: size === 'sm' ? '8px 16px' : '13px 22px',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast)',
    opacity: disabled ? 0.45 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid transparent'
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: '#FBFAF7',
      borderColor: 'var(--accent-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'var(--ink-900)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-primary)',
      borderColor: 'transparent',
      padding: size === 'sm' ? '8px 4px' : '13px 4px'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--accent-primary-hover)',
    borderColor: 'var(--accent-primary-hover)'
  } : variant === 'secondary' ? {
    background: 'var(--ink-900)',
    color: '#FBFAF7'
  } : {
    textDecoration: 'underline'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--ink-700)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '17px',
      height: '17px',
      borderRadius: '2px',
      border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--ink-100)'}`,
      background: checked ? 'var(--accent-primary)' : 'var(--paper)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--transition-fast), border-color var(--transition-fast)',
      flexShrink: 0
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      background: '#FBFAF7',
      borderRadius: '1px'
    }
  }) : null), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--ink-700)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--ink-900)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? '#8a3b2b' : focused ? 'var(--accent-primary)' : 'var(--ink-100)'}`,
      background: 'var(--paper)',
      outline: 'none',
      transition: 'border-color var(--transition-fast)'
    }
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: '#8a3b2b'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
